const bcrypt  =  require("bcrypt");

module.exports.generateHash =  async function(password){
    let salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};

module.exports.comparePassword = async function (password, hash){
    return bcrypt.compareSync(password, hash);
};