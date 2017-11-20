"use strict";

function create(req, res, next){
    req.checkBody('category_name','category name is required').exists();
    req.validationErrors()===false? next():res.send(req.validationErrors());
}

export {
    create
}