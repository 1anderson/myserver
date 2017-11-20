"use strict";

function create(req, res, next){
    req.checkBody('sub_category_name','sub category name is required').exists();
    req.checkBody('category_id','category_id must be an integer value').isInt();
    req.validationErrors()===false? next():res.send(req.validationErrors());
}

export {
    create
}