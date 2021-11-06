require("dotenv").config();
const server = require("./src/server");

server(process.env.MODE); 