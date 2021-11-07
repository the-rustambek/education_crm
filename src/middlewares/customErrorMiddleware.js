const customError = require("../helpers/customError");

module.exports = function customErrorMiddleware(req,res,next){
    res.error = customError;
    next();
}