const {Sequelize} =  require("sequelize");
const sessionModel = require("../../models/sessionModel");
const userModel = require("../../models/userModel");
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
await relations(db);
await init(db);
await sequelize.sync();
        return db;
        
    } catch (error) {
        console.error("Unable to connecct to the database:", error); 
    }
}