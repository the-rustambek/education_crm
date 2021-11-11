const { Sequelize, DataTypes } = require("sequelize");

module.exports = async (db) => {
	await db.users.hasMany(db.sessions, {
		foreignKey: {
			name: "user_id",
			allowNull: false,
		},
	});

	await db.sessions.belongsTo(db.users, {
		foreignKey: {
			name: "user_id",
			allowNull: false,
		},
	});

	await db.users.hasMany(db.user_permissions, {
		foreignKey: {
			name: "user_id",
			allowNull: false,
		},
	});

	await db.user_permissions.belongsTo(db.users, {
		foreignKey: {
			name: "user_id",
			allowNull: false,
		},
	});

	await db.permissions.hasMany(db.user_permissions, {
		foreignKey: {
			name: "permission_id",
			allowNull: false,
		},
	});

	await db.user_permissions.belongsTo(db.permissions, {
		foreignKey: {
			name: "permission_id",
			allowNull: false,
		},
	});


	await db.users.hasOne(db.teachers,{
		foreignKey:{
			name:"user_id",
			allowNull:false,
			unique:true,
		}
	});

	await db.teachers.belongsTo(db.users,{
		foreignKey:{
			name: "user_id",
			allowNull:false,
			unique:true,
		}
	})



}