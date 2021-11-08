const joi = require("joi");

module.exports = class Validations {
	static async signUpValidation(data, Error) {
		return await joi
			.object({
				name: joi.string().required().min(2).max(64).error(new Error("Name is invalid")),
				password: joi.string().required().max(128).min(6).error(new Error("Password is invalid")),
				username: joi.string().regex(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/).error(new Error("Username is invalid")),
				gender: joi.string().required().valid("male", "female").error(new Error("This option isn't available")),
			}).validateAsync(data);
	}

	static async signInValidation(data, CustomError) {
		return await joi
		.object({
			username: joi.string().regex(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/).error(new Error("Username is invalid")),
			password: joi.string().required().max(128).min(6).error(new Error("Password is invalid")),
			
		}).validateAsync(data);
	}

}