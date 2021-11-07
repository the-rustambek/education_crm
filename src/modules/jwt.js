 const jwt = require("jsonwebtoken");

 module.exports.createToken =  async function(user){
     return jwt.sign(user, process.env.JWT_SECRET,{
         expiresIn: "1d",
     });
 };


 module.exports.verifyToken = async  function(token){
     return jwt.verify(token, process.env.JWT_SECRET);
 };

 