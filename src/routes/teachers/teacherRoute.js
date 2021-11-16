const { teacherCreatePostController, teacherUpdatePutController, teacherGetController } = require("../../controllers/teacherController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");



const teacherRoute = require("express").Router();

teacherRoute.use([authMiddleware,permissionMiddleware]),

teacherRoute.post("/",teacherCreatePostController);
teacherRoute.put("/:teacher_id", teacherUpdatePutController);
teacherRoute.get("/", teacherGetController)

module.exports = teacherRoute;