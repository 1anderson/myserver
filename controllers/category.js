
"use strict";
import { formatingSequelizeErrors } from '../services/error-monitoring';
import * as formattingService from '../services/formatting-sequelize-output'
import { Jsonformater } from '../services/formatting-json';

function createCategory(models) {
    return (req, res, next) => {
        models.Category.create({
            name: req.body.name,
            theme_fk: req.body.theme_fk
        }).then((category)=> {
            Jsonformater.formater(models.Category,category)
                .then(categoryFormated => {
                    res.status(201).json(categoryFormated);
                });
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
            res.status(200).json(formattingService.formattingOutput(categories));
            
        }).catch((err) => {
            res.status(400).json({msg: formatingSequelizeErrors(err)});
        })
    }
}

export {
    createCategory,
    getAll
}