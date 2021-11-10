const {checkToken} = require("../modules/jwt");

module.exports = async function authMiddleware(req,res,next){
    try {
        const token = req.headers["authorization"];
        if(token){
            res.error(401, "Token is not found");
            return;
        }
        if(!checkToken(token)){
            res.error(401,"Token is invalid");
        }
        next();
    } catch (error) {
        
    }
}