
const authMiddleware =  require('../../middlewares/authMiddleware');
const {applicantGetController,applicantPostController} = require("../../controllers/applicantController")

const permissionMiddleware =  require('../../middlewares/permissionMiddleware');

const applicantRoute = require('express').Router();

applicantRoute.use([authMiddleware,permissionMiddleware]);

applicantRoute.use("/",applicantGetController);
applicantRoute.use("/course:id",applicantPostController);
module.exports = applicantRoute;