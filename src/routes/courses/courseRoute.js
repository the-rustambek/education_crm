const {
    courseCreatePostController,
    courseGetController,
    courseUpdatePutController,
    courseGetOneController
} = require("../../controllers/courseController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const expressFileUploadMiddleware = require("express-fileupload");

const courseRoute = require("express").Router();

courseRoute.use([authMiddleware, permissionMiddleware]);

courseRoute.post("/", expressFileUploadMiddleware({
    abortOnLimit: true,
    safeFileNames: true,
}), courseCreatePostController);


courseRoute.put("/:course_id", expressFileUploadMiddleware({
        abortOnLimit: true,
        safeFileNames: true,
    }),
    courseUpdatePutController)

courseRoute.get("/", courseGetController);
courseRoute.get("/:course_id", courseGetOneController);


module.exports = courseRoute;