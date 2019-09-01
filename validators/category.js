"use strict";

function create(req, res, next){
    req.checkBody('name','category name is required').exists();
    req.validationErrors()===false? next():res.send(req.validationErrors());
}

export {
    create
}