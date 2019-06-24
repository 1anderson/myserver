
"use strict";
import { formatingSequelizeErrors } from '../services/error-monitoring';
import * as formattingService from '../services/formatting-sequelize-output'

function createCategory(models) {
    return (req, res, next) => {
        models.Category.create({
            name: req.body.category_name
        }).then((category)=>{
            res.status(201).json({msg: 'Category create successfully'});
        }).catch((err)=>{
            console.log(err);
            res.status(400).json({msg: formatingSequelizeErrors(err)});
            console.log(err);
        });
    };
};

function getAll(models){
    return (req, res, next) => {
        models.Category.findAll().then((categories)=>{
            res.status(200).json({categories: formattingService.formattingOutput(categories)});
            
        }).catch((err) => {
            res.status(400).json({msg: formatingSequelizeErrors(err)});
        })
    }
}

export {
    createCategory,
    getAll
}