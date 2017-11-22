"use strict";

import * as fileService from '../services/file';

function create(models){
    return (req, res, next ) => {
        fileService.movefiles(req.files.foo);
        //console.log(req.files.foo);
        // models.Post.create({
        //     title: req.body.title,
        //     description: req.body.description,
        //     body: req.body.body,
        //     created_date: new Date()
        // }).then((post)=>{

        // });
    };
};



export {
    create
};