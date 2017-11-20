'use strict';


function saveErros(erros){

};

function sendErros(){

};

function mountingSequelizeErrors(errors){
    var errorMessages = [];
    for (var i = 0; i< errors.length;i++){
        errorMessages.push(errors[i].message);
    }
    return errorMessages;
};

export {
    saveErros,
    mountingSequelizeErrors
}

