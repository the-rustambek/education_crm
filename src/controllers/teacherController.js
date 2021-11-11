const permissionChecker = require("../helpers/permissionChecker");
const Validations = require("../modules/validation");

module.exports = class teacherController{
    static async teacherCreatePostController(req,res,next) {
        try {
            permissionChecker("admin",req.user_permissions, res.error);

            const data = await Validations.addTeacherValidation(req.body, res.error);



            const teacher = await req.db.teachers.create({
            user_id: data.user_id,
            teacher_phone:data.phone,
            teacher_skills: data.skills,
        });

        res.status(201).json({
            ok:true,
            message: "Teacher created succesfully"
        });
            //   console.log(teacher);
        
        } catch (error) {
            if(error.message == "Validation error"){
                error.message = "This user is already teacher";
                error.errorCode = 400
            }
            next(error);
        }
    }
}