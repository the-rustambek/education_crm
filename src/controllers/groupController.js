const permissionChecker = require("../helpers/permissionChecker");
const {groupCreateValidation} = require("../modules/validation");

module.exports = class groupController{
    static async groupCreateController(req,res,next){
        try {
            permissionChecker(["admin","operator"]),

            const data = await Validations.groupCreateValidation(req.body, res.error);


        } catch (error) {
            next(error);
        }
    }
}