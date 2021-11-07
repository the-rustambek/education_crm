const { signInValidation } = require("../modules/validation");

module.exports =  class userController{
    static async signInController(req,res,next){
         try {
             const {username,password} =await signInValidation(req.body);
         } catch (error) {
             
         }
    }
}