
"use strict";
import { formatingSequelizeErrors } from '../services/error-monitoring';
import * as formattingService from '../services/formatting-sequelize-output'
function createAuthor(models) {
    return (req, res, next) => {
        models.Author.create({
            name: req.body.author_name,
            date_of_creation : new Date()
        }).then((author)=>{
            res.status(201).json({msg: 'Author create successfully'});
        }).catch((err)=>{
            res.status(400).json({msg: formatingSequelizeErrors(err)});
        });
    };
};

function getAll(models) {
    return (req, res, next) => {
        models.Author.findAll().then((authors)=> {
            formattingService.formattingOutput(authors)
            res.status(200).json(formattingService.formattingOutput(authors));
            
        }).catch((err) => {
            res.status(400).json({msg: formatingSequelizeErrors(err)});
        })
    }
}

export {
    createAuthor,
    getAll
}