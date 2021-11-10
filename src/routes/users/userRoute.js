const { signInController, createUserController } = require("../../controllers/userController");
const authMiddleware = require("../../middlewares/authMiddleware");

const userRouter = require("express").Router();


userRouter.post("/sign_in", signInController)
userRouter.post("/account",[authMiddleware],createUserController)

module.exports = userRouter;