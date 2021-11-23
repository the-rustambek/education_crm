const permissionChecker = require("../helpers/permissionChecker")
const {
    addApplicantValidation,
    updateApplicantValidation
} = require("../modules/validation")


module.exports = class applicantController {
    static async applicantGetController(req, res, next) {
        try {
            permissionChecker(["admin", "operator"], req.user_permissions, res.error);

            const limit = req.query.limit || 15;
            const offset = req.query.offset - 1 || 0;

            const applicants = await req.db.applicants.findAll({

                limit,
                offset: offset * 15,
                include: [{
                        model: req.db.users,
                    },
                    {
                        model: req.db.courses,
                    },
                ],

            });

            res.status(200).json({
                ok: true,
                message: "Applicants",
                data: {
                    applicants
                }
            })
        } catch (error) {
            console.log(error);
            next(error);

        }
    }

    static async applicantPostController(req, res, next) {
        try {
            permissionChecker(["admin", "operator"], req.user_permissions, res.error);


            const course_id = req.params.course_id;
            const course = await req.db.courses.findOne({
                where: {
                    course_id,
                },
            });

            if (!course) {
                throw new res.error(404, "Course is not found");
            }


            const data = await addApplicantValidation(req.body, res.error);

            // console.log(data);

            const applicant = await req.db.applicants.create({
                applicant_name: data.name,
                applicant_gender: data.gender,
                applicant_birth_date: data.birth_date,
                applicant_description: data.description,
                applicant_phone: data.phone,
                applicant_source: data.source,
                applicant_status: "waiting",
                course_id,
                user_id: req.session.user_id,
            });

            console.log(applicant);
            res.status(201).json({
                ok: true,
                message: "Applicant created successfully",
            });
        } catch (error) {
            console.log(error)
            next(error);
        }
    }


    static async applicantPutController(req, res, next) {
        try {
            permissionChecker(["admin", "operator"], req.user_permissions, res.error);

            const applicant_id = req.params.applicant_id;

            const applicant = await req.db.applicants.findOne({
                where: {
                    applicant_id
                },
            });


            if (!applicant) {
                throw new res.error(404, "Applicant not found");
            }

            const data = await updateApplicantValidation(req.body, res.error);

            await req.db.applicants.update({
                applicant_name: data.name,
                applicant_gender: data.gender,
                applicant_birth_date: data.birth_date,
                applicant_description: data.description,
                applicant_phone: data.phone,
                applicant_source: data.source,
                applicant_status: data.status

            }, {
                where: {
                    applicant_id,
                }
            });

            res.status(200).json({
                ok: true,
                message: "Applicant updated successfully "
            })

        } catch (error) {
            next(error);
        }
    }
}