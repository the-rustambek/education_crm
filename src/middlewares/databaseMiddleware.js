module.exports = async function (db,app){
    app.use(async(req,res,next) =>{
        req.db = await db;
        next();
    });
};