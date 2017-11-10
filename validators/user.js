"use strict";

    function loginValidator(req){
        console.log('validator login');
    };
    
    function validatingForCreation(req, res, next){
        req.checkBody('name','name is required').exists();
        req.checkBody('last_name','last name is required').exists();
        req.checkBody('email','enter a valid email address').isEmail();
        req.validationErrors()===false? next():res.send(req.validationErrors());
    };

    function creationValidation(req){
        
       
    };



    export {
        loginValidator,
        validatingForCreation
    };


