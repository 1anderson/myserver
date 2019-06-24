"use strict";

import * as fileService from '../services/file';
import { formatingSequelizeErrors } from '../services/error-monitoring';
import * as formattingService from '../services/formatting-sequelize-output';

function create(models){
    return ( req, res, next ) => {
        console.log("body----------------------->",req);
       models.Post.create({
            title: req.body.title,
            description: req.body.description,
            created_date: new Date(),
            user_profile_fk: req.body.user_profile_id,
            category_fk: req.body.category_id,
            sub_category_fk: req.body.sub_category_id
        }).then((post)=>{
            if(req.files.files) {
                fileService.movefiles(post.id, req.files.files)
                    .then((pathOfImagens)=> {
                        post.update({
                            path_of_images: pathOfImagens
                        }).then(() => {
                            res.status(201).json({msg: `post created successfully`})
                        })
                });
            }else{
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
        models.Post.findAll().then((posts)=>{
            res.status(200).json({posts: formattingService.formattingOutput(posts)});
            
        }).catch((err) => {
            res.status(400).json({msg: formatingSequelizeErrors(err)});
        })
    }
}


export {
    create,
    getAll
};