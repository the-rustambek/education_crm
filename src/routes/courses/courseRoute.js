const { courseCreatePostController } = require("../../controllers/courseController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const courseRoute = require("express").Router();

courseRoute.use([authMiddleware,permissionMiddleware]);

courseRoute.post("/",courseCreatePostController);

module.exports =  courseRoute;