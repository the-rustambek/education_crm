module.exports = class customError extends Error{
    constructor(errorCode,errorMessage){
        super(errorMessage);
        this.errorCode = errorCode;
   
    }
}