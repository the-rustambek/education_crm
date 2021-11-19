const {Sequelize} =  require("sequelize");
const courseModel = require("../../models/courseModel");
const permissionModel = require("../../models/permissionModel");
const sessionModel = require("../../models/sessionModel");
const teachersModel = require("../../models/teachersModel");
const userModel = require("../../models/userModel");
const userPermissionModel = require("../../models/userPermissionModel");
const init = require("./init");
const relations = require("./relations");

const sequelize = new Sequelize(process.env.DATABASE_URL,{
    logging: false,
});

module.exports = async  function postgres(){
    try {
        await sequelize.authenticate();

        let db = {};
        db.users =  await userModel(sequelize, Sequelize);
        db.sessions = await sessionModel(sequelize,Sequelize);
        db.permissions = await permissionModel(sequelize,Sequelize);
        db.user_permissions = await userPermissionModel(sequelize,Sequelize);
        db.teachers = await teachersModel(sequelize, Sequelize);
        db.courses =  await courseModel(sequelize,Sequelize);
        
        await relations(db);
        await init(db);
        await sequelize.sync({force:false})
        return db;
        
    } catch (error) {
        console.error("Unable to connecct to the database:", error); 
    }
}