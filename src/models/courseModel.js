module.exports = async (sequelize, Sequelize) =>{
    return await sequelize.define("courses",{
        course_id:{
            type:Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4(),
            allowNull: false,
            primaryKey:true,
        },
        course_name:{
            type:Sequelize.STRING(64),
            allowNull:false,
        },
        course_price:{
            type:Sequelize.INTEGER,
            allowNull:false,
            defaultValue:0,
        },
        course_description:{
            type:Sequelize.TEXT,
            allowNull:false
        },
        course_photo:{
            type: Sequelize.STRING,
            allowNull:true,
        },

    })
}