"use strict";



    

    function loginValidator(){
        console.log('validator login');
    };
    
    function validatingForCreation(req, res, next){
        req.checkBody('name','name is required').exists();
        req.validationErrors()===false? next():res.send(req.validationErrors());
       //next();
       
    }


    export {
        loginValidator,
        validatingForCreation
    };


