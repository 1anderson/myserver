'use strict';


function saveErros(erros){

};

function sendErros(){

};

function formatingSequelizeErrors(err){

    switch(err.name){
        case 'SequelizeUniqueConstraintError':
            return sequelizeErrosMensages(err.errors);
        case 'SequelizeForeignKeyConstraintError':
            return SequelizeForeignKeyConstraintError(err.table);
        case 'SequelizeValidationError':
            return sequelizeErrosMensages(err.errors);
    }
   
};

function sequelizeErrosMensages(errors){
    var errorMessages = [];
    for (var i = 0; i< errors.length;i++){
        errorMessages.push(errors[i].message);
    }
    return errorMessages;
};

function SequelizeForeignKeyConstraintError(name){
    return `enter a valid ${name} id`
}




export {
    saveErros,
    formatingSequelizeErrors
}

