const { signInValidation } = require("../modules/validation");

module.exports =  class userController{
    static async signInController(req,res,next){
         try {
             const {username,password} =await signInValidation(req.body,res.error);
             console.log(username,password);
         } catch (error) {
             next(error);
             
         }
    }
    static async createUserController(req,res,next){
        try {
            
        } catch (error) {
            next(error);
        }
    }
}