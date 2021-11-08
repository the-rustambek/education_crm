const express = require ("express");
const app =  express();
const morgan = require("morgan");
const routes =  require("./routes")
const postgres = require("./modules/pg/postgres");
const databaseMiddleware = require("./middlewares/databaseMiddleware");
const customErrorMiddleware = require("./middlewares/customErrorMiddleware");
const path = require("path");

async function server(mode){
    try {

        app.listen(process.env.PORT || 80, () =>
        console.log(`Server ready ${process.env.PORT || 80}`));

        const db = await postgres();
    
        await  databaseMiddleware(db, app);
        app.use(customErrorMiddleware);
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
