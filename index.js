const server = require("./src/server");
require("dotenv").config();
server(process.env.MODE);