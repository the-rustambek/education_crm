const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");
const {
    groupCreatePostController,
    groupUpdateController,
    addApplicantToGroupController,
    deleteStudentFromGroupController,
    groupStudentsGetController
} = require("../../controllers/groupController");

const groupRoute = require("express").Router();

groupRoute.use([authMiddleware, permissionMiddleware]);

groupRoute.post("/", groupCreatePostController);
groupRoute.put("/:group_name", groupUpdateController);

groupRoute.post("/student", addApplicantToGroupController);

// 
groupRoute.delete("/student/:student_id", deleteStudentFromGroupController);
groupRoute.get("/students/:group_name", groupStudentsGetController)




module.exports = groupRoute;