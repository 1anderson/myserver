"use strict";
import { formatingSequelizeErrors } from '../services/error-monitoring';
import * as formattingService from '../services/formatting-sequelize-output'

function create(models){
    return (req, res, next)=> {
        models.Sub_category.create({
            category_fk: req.body.category_id,
            name: req.body.sub_category_name
        }).then((sub_category)=>{
            res.status(201).json({msg: 'Sub category create successfully'})
        }).catch((err)=>{
            console.log(err);
            res.status(400).json({msg: formatingSequelizeErrors(err)});
        });
    }
}

function getAll(models) {
    return (req, res, next) => {
        console.log(models);
        models.Sub_category.findAll().then((subCategories)=>{
            res.status(200).json({subCategories: formattingService.formattingOutput(subCategories)});
            
        }).catch((err) => {
            res.status(400).json({msg: formatingSequelizeErrors(err)});
        })
    }
}

export {
    create,
    getAll
}