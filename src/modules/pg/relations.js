module.exports = async (db) =>{
    await db.users.hasMany(db.sessions,{
        foreignKey:{
            name: "user_id",
            allowNull:false,
        },
    });
    await db.sessions.belongsTo(db.users,{
        foreignKey:{
            name: "user_id",
            allowNull:false,
        },
    })
}