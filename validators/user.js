"use strict";

    function loginValidator(req){
        console.log('validator login');
    };
    
    function validatingForCreation(req, res, next){
        req.checkBody('name','name is required').exists();
        req.checkBody('last_name','last name is required').exists();
        req.checkBody('role',' role is required with upper case').isUppercase();
        req.checkBody('password','password name is required').exists();
        req.checkBody('email','enter a valid email address').isEmail();
        req.validationErrors()===false? next():res.send(req.validationErrors());
    };

    function loginValidation(req, res, next){
        req.checkBody('email','email is required').exists();
        req.checkBody('password','password is required').exists();
        req.validationErrors()===false? next():res.send(req.validationErrors());
    };



    export {
        loginValidation,
        validatingForCreation
    };


