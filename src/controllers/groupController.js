const permissionChecker = require("../helpers/permissionChecker");
const {
    groupCreateValidation,
    addApplicantValidation
} = require("../modules/validation");

module.exports = class groupController {
    static async groupCreatePostController(req, res, next) {
        try {
            permissionChecker("admin", req.user_permissions, res.error);

            const data = await groupCreateValidation(req.body, res.error);


            function getRandomName(length) {
                var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var result = '';
                for (var i = 0; i < length; i++) {
                    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
                }
                return result;
            }



            const group = await req.db.groups.create({

                group_time: data.time,
                group_status: data.status,
                group_name: getRandomName(8),
                group_lesson_duration: data.lesson_duration,
                group_course_duration: data.course_duration,
                group_schedule: data.schedule,
                course_id: data.course_id,
                teacher_id: data.teacher_id
            });

            res.status(201).json({
                ok: true,
                message: "Group   created successfully",
                data: {
                    group,
                }
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }



    static async groupUpdateController(req, res, next) {
        try {

            permissionChecker("admin", req.user_permissions, res.error);


            const data = await groupCreateValidation(req.body, res.error);
            const group_name = req.params.group_name;

            const group = await req.db.groups.findOne({
                where: {
                    group_name
                }
            });

            if (!group) throw new res.error("Group not found");

            await req.db.groups.update({
                group_time: data.time,
                group_status: data.status,
                group_lesson_duration: data.lesson_duration,
                group_course_duration: data.course_duration,
                group_schedule: data.schedule,
            }, {
                where: {
                    group_name,
                }
            })
            // console.log(group);

            res.status(201).json({
                ok: true,
                message: "Group updated successfully"
            })

        } catch (error) {

            next(error);
        }
    }




    static async groupGetController(req, res, next) {
        try {

            permissionChecker("admin", req.user_permissions, res.error);

            const groups = await req.db.groups.findAll({
                raw: true,
                include: [{
                        model: req.db.courses
                    },
                    {
                        model: req.db.teachers
                    },
                    {
                        model: req.db.group_students
                    }
                ]
            })

            res.status(200).json({
                ok: true,
                message: "Groups",
                data: {
                    groups
                }
            })


        } catch (error) {
            next(error);
        }
    }


    static async addApplicantToGroupController(req, res, next) {
        try {
            permissionChecker("admin", req.user_permissions, res.error);

            const {
                applicant_id,
                group_name
            } = addApplicantValidation(req.body, res.error);

            const new_student = await req.db.group_students.create({
                group_student_id: applicant_id,
                group_id: group_name
            });

            await req.db.applicants.update({
                applicant_status: "active",
            }, {
                where: {
                    applicant_id
                }
            })

            res.status(201).json({
                ok: true,
                messaga: "Applicant added to course successfully"
            })

        } catch (error) {
            console.log(error);
            next(error);
        }
    }





    static async deleteStudentFromGroupController(req, res, next) {
        try {
            permissionChecker("admin", req.user_permissions, res.error);

            const student_id = req.params.student_id;

            const student = await req.db.group_students.findOne({
                raw: true,
                where: {
                    group_student_id: student_id
                }
            });

            if (!student) {
                throw new res.error("Student not found")
            };

            await req.db.group_students.destroy({
                where: {
                    group_student_id: student_id
                }
            });

            await req.db.applicants.update({
                applicant_status: "cancelled"
            }, {
                where: {
                    applicant_id: student_id
                }
            });

            res.status(200).json({
                ok: true,
                message: "Deleted succesfully"
            })


        } catch (error) {
            next(error)
        }
    }


    static async groupStudentsGetController(req, res, next) {
        try {
            permissionChecker("admin", req.user_permissions, res.error);

            const group_name = req.params.group_name;

            const students = await req.db.group_students.findAll({
                raw: true,
                where: {
                    group_name: group_name
                },
                include: {
                    model: req.db.applicants
                }
            })

            res.status(200).json({
                ok: true,
                message: "Group_Students",
                data: {
                    students
                }
            })
        } catch (error) {
            next(error)
        }
    }



}