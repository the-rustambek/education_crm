
const authMiddleware =  require('../../middlewares/authMiddleware');
const {applicantGetController,applicantPostController} = require("../../controllers/applicantController")

const permissionMiddleware =  require('../../middlewares/permissionMiddleware');

const applicantRoute = require('express').Router();

applicantRoute.use([authMiddleware,permissionMiddleware]);

applicantRoute.get("/",applicantGetController);
applicantRoute.post("/:course_id",applicantPostController);

module.exports = applicantRoute;