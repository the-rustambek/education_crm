module.exports = function(err,req,res,next){
    res.status(err.errorCode || 500).json({
        ok:false,
        message: err.message || "Something broke!",
    });
};