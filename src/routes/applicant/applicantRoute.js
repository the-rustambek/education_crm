
const authMiddleware =  require('../../middlewares/authMiddleware');
const {applicantGetController,applicantPostController,applicantPutController} = require("../../controllers/applicantController")

const permissionMiddleware =  require('../../middlewares/permissionMiddleware');

const applicantRoute = require('express').Router();

applicantRoute.use([authMiddleware,permissionMiddleware]);

applicantRoute.get("/",applicantGetController);
applicantRoute.post("/:course_id",applicantPostController);
applicantRoute.put("/:applicant_id", applicantPutController);

module.exports = applicantRoute;