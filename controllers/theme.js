"use strict";

import * as fileService from '../services/file';
import { formatingSequelizeErrors } from '../services/error-monitoring';
import * as formattingService from '../services/formatting-sequelize-output';
import { Jsonformater } from '../services/formatting-json';

function getAll(models) {
    return (req, res, next) => {
        models.Theme.findAll({include: [{ all: true, nested: true }]}).then((themes)=> {
            Jsonformater.formaterMany(models.Theme,themes)
                .then((themes)=> {
                    res.status(200).json(themes);
                });
        }).catch((err) => {
            console.log(err)
            res.status(400).json({msg: formatingSequelizeErrors(err)});
        })
    }
}

function create(models) {
    return (req, res, next) => {
        models.Theme.create(
            { name: req.body.name }
        ).then(theme => {
            Jsonformater.formater(models.Theme, theme)
                .then(dataFormated => {
                    res.status(201).json(dataFormated);
                });
        }).catch(err => {
            res.status(400).json({msg: err});
        });
    }
}

export {
    getAll,
    create
}