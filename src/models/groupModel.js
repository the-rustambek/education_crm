module.exports = async (sequelize, Sequelize) => {
	return await sequelize.define("groups", {
		group_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		group_name: {
			type: Sequelize.STRING(8),
			allowNull: false,
			unique: true,
		},
		group_time: {
			type: Sequelize.STRING(5),
			allowNull: false,
		},
		group_status: {
			type: Sequelize.ENUM,
			values: ["waiting", "studying", "finished", "closed"],
			defaultValue: "waiting",
		},
		group_schedule: {
			type: Sequelize.ARRAY(Sequelize.STRING),
			allowNull: false,
		},
		group_lesson_duration: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		group_course_duration: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
	});
};