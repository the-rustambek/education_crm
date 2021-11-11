const { teacherCreatePostController } = require("../../controllers/teacherController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");



const teacherRoute = require("express").Router();

teacherRoute.use([authMiddleware,permissionMiddleware]),

teacherRoute.post("/",teacherCreatePostController);

module.exports = teacherRoute;;