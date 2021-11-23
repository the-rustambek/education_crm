module.exports = async (sequelize, Sequelize) => {
    return await sequelize.define("group_students", {
        group_student_id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4()
        },
    })
}