const permissionChecker = require("../helpers/permissionChecker");
const { courseCreateValidation } = require("../modules/validation");

module.exports = class courseController{
    static async courseCreatePostController(req,res,next){
        try {
            permissionChecker("admin", req.user_permissions, res.error);
const photo = req?.files?.photo;
// console.log(photo);
            const data = courseCreateValidation(req.body,res.error);
            console.log(data);
        } catch (error) {
            console.log(error);
            next();
        }
    }

}