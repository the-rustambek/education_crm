const joi = require("joi");

module.exports = class Validations {
	static async signUpValidation(data, Error) {
		return await joi
			.object({
				name: joi.string().required().min(2).max(64).error(new Error("Name is invalid")),
				password: joi.string().required().max(128).min(5).error(new Error("Password is invalid")),
				username: joi.string().regex(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/).error(new Error("Username is invalid")),
				gender: joi.string().required().valid("male", "female").error(new Error("This option isn't available")),
			}).validateAsync(data);
	}

	static async signInValidation(data, customError) {
		return await joi
			.object({
				username: joi.string().regex(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/).error(new customError(400, "Username is invalid")),
				password: joi.string().required().max(128).min(5).error(new customError(400, "Password is invalid")),

			}).validateAsync(data);
	}





	static async addTeacherValidation(data, customError) {
		return await joi
			.object({
				user_id: joi.string().uuid()
					.required()
					.error(new customError(400, "User id is invalid")),
				phone: joi
					.string()
					.required()
					.error(new customError(400, "Phone is invalid"))
					.regex(/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/),
				skills: joi
					.array()
					.items(joi.string().min(2).max(32))
					.required(),
			})
			.validateAsync(data);
	}




	static async courseCreateValidation(data, customError) {
		return await joi
			.object({
				name: joi
					.string()
					.min(8)
					.max(128)
					.required()
					.error(new customError(400, "Name is invalid")),
				description: joi
					.string()
					.required()
					.error(new customError(400, "Description is invalid"))
					.min(64),
				price: joi
					.number()
					.min(0)
					.error(new customError(400, "Price is invalid"))
					.required(),
			})
			.validateAsync(data);
	}

	static async addApplicantValidation(data, customError) {
		return await joi
			.object({
				name: joi
					.string()
					.min(8)
					.max(64)
					.required()
					.error(new customError(400, "Name is invalid")),
				description: joi
					.string()
					.error(new customError(400, "Description is invalid"))
					.min(64),
				birth_date: joi
					.date()
					.error(new customError(400, "Date is invalid"))
					.required(),
				phone: joi
					.string()
					.required()
					.error(new customError(400, "Phone is invalid"))
					.regex(/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/),
				gender: joi
					.string()
					.required()
					.valid("male", "female")
					.error(new Error("This option isn't available")),
				source: joi.string().required().error(new Error("Source is invalid"))
			}).validateAsync(data);
	};

	static async updateApplicantValidation(data, customError) {
		return await joi
			.object({
				name: joi
					.string()
					.min(8)
					.max(64)
					.error(new customError(400, "Name is invalid")),
				description: joi
					.string()
					.error(new customError(400, "Description is invalid"))
					.min(64),
				birth_date: joi
					.date()
					.error(new customError(400, "Date is invalid"))
					.required(),
				phone: joi
					.string()
					.error(new customError(400, "Phone is invalid"))
					.regex(/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/),
				gender: joi
					.string()
					.valid("male", "female")
					.error(new Error("This option isn't available")),
				status: joi
					.string()
					.valid("waiting", "active", "cancelled")
					.error(new Error("This option isn't available")),
				source: joi.string().error(new Error("Source is invalid"))
			}).validateAsync(data);

	};



	static async groupCreateValidation(data, customError) {
		return await joi
			.object({
				schedule: joi
					.array()
					.items(joi.string().min(2))
					.required()
					.error(new customError(400, "Schedule must be array")),
				time: joi
					.string()
					.required()
					.error(new customError(400, "Time is invalid")),
				lesson_duration: joi
					.number()
					.required()
					.error(new customError(400, "Lesson Duration is invalid")),
				status: joi
					.string()
					.required()
					.error(new customError(400, "Status is invalid")),
				course_duration: joi
					.number()
					.required()
					.error(new customError(400, "Course duration is invalid")),
				teacher_id: joi
					.string()
					.required()
					.error(new customError(400, "Teacher id invalid")),
				course_id: joi
					.string()
					.required()
					.error(new customError(400, "Course_id id invalid"))
			})
			.validateAsync(data);
	}


	static async addApplicantValidation(data, customError) {
		return await joi.object({
			applicant_id: joi.string().error(new customError(400, "Applicant id is invalid")),
			group_id: joi.string().required().error(new customError(400, "Group id is invalid"))
		}).validateAsync(data);
	}

}