const { signInController, createUserController } = require("../../controllers/userController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const userRouter = require("express").Router();


userRouter.post("/sign_in", signInController)
userRouter.post("/account",[authMiddleware,permissionMiddleware],createUserController)

module.exports = userRouter;
