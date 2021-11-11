
const {
    signInValidation, signUpValidation
} = require("../modules/validation");
const {createToken} =  require("../modules/jwt");
const {generateHash} = require("../modules/bcrypt");
const permissionChecker = require("../helpers/permissionChecker");

module.exports = class userController {
    static async signInController(req, res, next) {
        try {
            const {
                username,
                password
            } = await signInValidation(req.body, res.error);


            const user = await req.db.users.findOne({
                where: {
                    user_username: username,
                },
                raw: true,
            });

            if (!user) throw new res.error(400, "User not found");

            await req.db.sessions.destroy({
                where: {
                    session_useragent: req.headers["user-agent"] || "Unknown",
                    user_id: user.user_id,
                },
            });


            const session = await req.db.sessions.create({
                session_useragent: req.headers["user-agent"] || "Unknown",
                user_id: user.user_id,
            });

            const token = await createToken({
                session_id:session.dataValues.session_id,
            });

            res.status(201).json({
                ok:true,
                message: "Token created succesfully",
                data:{
                    token,
                },
            });
            
            
            // console.log(token)
        } catch (error) {
            next(error);

        }
    }



    static async createUserController(req, res, next) {
        try {

            permissionChecker("admin",req.user_permissions, res.error);

            const data = await signUpValidation(req.body, res.error);

            const user = await req.db.users.create({
                user_name: data.name,
                user_password: await generateHash(data.password),
                user_gender:    data.gender,
                user_username: data.username,
            });
            // console.log(user)

            res.status(201).json({
                ok:true,
                message: "User created successfully",
            });

        } catch (error) 
        {
            console.log(error);
            if(error.message =="Validation error"){
                error.errorCode = 400;
                error.message = "Username already exists"
            }
            next(error);
        }
    }

static async userGetController(req,res,next) {
    try {
    } catch (error) {
        
    }
}

}