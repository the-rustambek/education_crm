const { signInController } = require("../../controllers/userController");

const userRouter = require("express").Router();


userRouter.post("/sign_in", signInController)

module.exports = userRouter;