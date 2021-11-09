module.exports = async (sequelize, Sequelize) =>{
    return await sequelize.define("permissions",{
        permission_id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        permission_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
};