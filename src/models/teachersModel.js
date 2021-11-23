module.exports = async (sequelize, Sequelize) => {
    return await sequelize.define("teachers", {
        teacher_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        teacher_phone: {
            type: Sequelize.STRING,
            allowNull: false
        },
        teacher_skills: {
            type: Sequelize.ARRAY(Sequelize.STRING),
            allowNull: false,
            defaultValue: [],
        }
    })
}