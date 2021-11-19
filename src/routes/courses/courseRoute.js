const { courseCreatePostController, courseGetController } = require("../../controllers/courseController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const expressFileUploadMiddleware = require("express-fileupload");

const courseRoute = require("express").Router();

courseRoute.use([authMiddleware,permissionMiddleware]);

courseRoute.post("/",expressFileUploadMiddleware({
    abortOnLimit:true,
    safeFileNames:true,
}),courseCreatePostController);

courseRoute.get("/", courseGetController);

module.exports =  courseRoute;

