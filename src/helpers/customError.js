module.exports = class costumError extends Error{
    constructor(errorCode,errorMessage){
        super(errorMessage);
        this.errorCode = errorCode;
   
    }
}