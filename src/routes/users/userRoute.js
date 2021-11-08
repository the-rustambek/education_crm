const { signInController, createUserController } = require("../../controllers/userController");

const userRouter = require("express").Router();


userRouter.post("/sign_in", signInController)
userRouter.post("/account",createUserController)

module.exports = userRouter;