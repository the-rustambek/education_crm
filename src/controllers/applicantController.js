
const permissionChecker = require("../helpers/permissionChecker")
const {addApplicantValidation} = require("../modules/validation")


module.exports = class applicantController{
    static async applicantGetController(req,res,next){
        try{
            permissionChecker(["admin","operator"],req.user_permissions,res.error);
            const limit = req.query.limit || 15;
            const offset = req.query.offset - 1 || 0;

            const applicants =  await req.db.applicants.findAll({
                raw: true,
                limit,
                offset: offset * 15,

            });
            res.json({
                ok: true,
                message: "OK",
                data: {
                    applicants,
                }
            })
        }
        catch(error){
            next(error);

        }
    }

    static async applicantPostController(req, res, next){
        try {
            permissionChecker(["admin","operator"],req.user_permissions,res.error);


const course_id = req.params.course_id;
const course =  await req.db.courses.findOne({
    where:{
        course_id,
    },
});

if(!course){
    throw new res.error(404,"Course not found");
}


const data  = addApplicantValidation(req.body,res.error);
console.log(data);

        } catch (error) {
            next(error);
        }
    }
}