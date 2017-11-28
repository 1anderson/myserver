
"use strict";
import { formatingSequelizeErrors } from '../services/error-monitoring';

function createCategory(models){
    return (req, res, next) => {
        models.Category.create({
            category_name: req.body.category_name
        }).then((category)=>{
            res.status(201).json({msg: 'Category create successfully'});
        }).catch((err)=>{
            console.log(err);
            res.status(400).json({msg: formatingSequelizeErrors(err)});
            console.log(err);
        });
    };
};

export {
    createCategory
}