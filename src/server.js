const express = require ("express");
const app =  express();
const morgan = require("morgan");
const routes =  require("./routes")

function server(mode){
    try {
        app.use(express.json());
        app.use(express.urlencoded({
            extended:true
        }));

        if(mode =="dev"){
            app.use(morgan("dev"));
        }
    } catch (error) {
        console.log("Server Error", error);
    }
    finally{
routes(app);
    }
}


module.exports = server;
