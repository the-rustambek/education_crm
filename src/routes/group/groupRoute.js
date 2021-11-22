const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");
const {groupCreatePostController} = require("../../controllers/groupController");

const groupRoute =  require("express").Router();

groupRoute.use([authMiddleware, permissionMiddleware]);

groupRoute.post("/",groupCreatePostController)

module.exports = groupRoute;