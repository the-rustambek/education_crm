const errorHandler = require("../helpers/errorHandler");

module.exports = async function(app) {
  try {
    app.use("/users",require("./users/userRoute"))
    app.use("/teachers", require("./teachers/teacherRoute"));
  } finally {
      app.use(errorHandler);
  }

};