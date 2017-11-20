"use strict";
import { mountingSequelizeErrors } from '../services/error-monitoring';
function create(models){
    return (req, res, next)=>{
        models.Sub_category.create({
            category_fk: req.body.category_id,
            sub_category_name: req.body.sub_category_name
        }).then((sub_category)=>{
            res.status(201).json({msg: 'Sub category create successfully'})
        }).catch((err)=>{
            console.log(err);
            //res.status(400).json({msg: mountingSequelizeErrors(err.errors)});
        });
    }
}

export {
    create
}