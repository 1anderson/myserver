"use strict";

import * as fileService from '../services/file';
import { formatingSequelizeErrors } from '../services/error-monitoring';
import * as formattingService from '../services/formatting-sequelize-output';
import { Jsonformater } from '../services/formatting-json';

function create(models) {
    return ( req, res, next ) => {
       models.Post.create({
            title: req.body.title,
            description: req.body.description,
            created_date: new Date(),
            author_fk: req.body.author_id,
            category_fk: req.body.category_id,
            sub_category_fk: req.body.subcategory_id
        }).then((post)=>{
            if(req.files.files) {
                fileService.movefiles(post.id, req.files.files)
                    .then((pathOfImagens)=> {
                        post.update({
                            path_of_images: pathOfImagens
                        }).then(() => {
                             Jsonformater.formater(models.Post,post)
                                .then((formatedData) => res.status(201).json({data:formatedData, msg: `post created successfully`}))
                        })
                    });
            }else {
                res.status(201).json({msg: `post created successfully`});
            }
        }).catch((err)=>{
            console.log(err);
           res.status(400).json({msg: formatingSequelizeErrors(err)});
        });
    };
};


function getAll(models){
    return (req, res, next) => {
        models.Post.findAll({include: {model: models.Author, as: 'author'}}).then((posts)=> {
            Jsonformater.formaterMany(models.Post,posts)
                .then((posts)=>{
                    res.status(200).json(posts);
                });


        }).catch((err) => {
            console.log(err)
            res.status(400).json({msg: formatingSequelizeErrors(err)});
        })
    }
}

function update(models) {
    return (req, res, next) => {
         models.Post.update({
             title: req.body.title,
             description: req.body.description,
             author_fk: req.body.author_id,
             category_fk: req.body.category_id,
             sub_category_fk: req.body.subcategory_id
         },{where: {id: req.body.id} })
            .then(() => models.Post.findById(req.body.id))
                .then((post)=> {
                    console.log("CORRIGIR uPDATE",post.pathOfImagens)
                    if(req.files.files) {
                        fileService.movefiles(post.id, req.files.files,post.pathOfImagens)
                            .then(()=> {
                                Jsonformater.formater(models.Post,post)
                                    .then((formatedData) => res.status(201).json({data:formatedData, msg: `post updated successfully`}))
                            });
                    }else {
                        res.status(201).json({msg: `post created successfully`});
                    }
                })
                .catch((err)=> {
                    console.log(err);
                    res.status(400).json({msg: formatingSequelizeErrors(err)});
                });
    }
}

function getById(models) {
    return (req, res, next) => {
        models.Post.findById(req.params.id)
            .then( post => {
                fileService.getFile(post.dataValues.path_of_images + "/blob.html")
                    .then(file => {
                        Jsonformater.formater(models.Post,post)
                            .then(post => {post.file = file.toString(); res.status(200).json(post)})
                    })
                    .catch(err =>{
                        console.log("err",err)
                    })

            })
            .catch((err)=> {
                    console.log(err);
                    res.status(400).json({msg: formatingSequelizeErrors(err)});
                });
    }
}


export {
    create,
    getAll,
    update,
    getById
};