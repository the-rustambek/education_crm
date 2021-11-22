const errorHandler = require("../helpers/errorHandler");

module.exports = async function(app) {
  try {
    app.use("/users",require("./users/userRoute"))
    app.use("/teachers", require("./teachers/teacherRoute"));
    app.use("/courses",require("./courses/courseRoute"));
    app.use("/applicants",require("./applicant/applicantRoute"));
    app.use("/groups",require("./group/groupRoute"));
    
  } finally {
      app.use(errorHandler);
  }

};