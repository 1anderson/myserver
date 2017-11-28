"use strict";
import { formatingSequelizeErrors } from '../services/error-monitoring';

function create(models){
    return (req, res, next) => {
        models.Comment.create({
            text: req.body.text,
            date_of_comment: req.body.date_of_comment,
            post_fk: req.body.post_id,
            user_profile_fk: req.body.user_profile_id
        }).then((comment)=>{
                res.status(201).json({msg: 'Comment create successfully'});
        }).catch((err)=>{
            res.status(400).json({msg: formatingSequelizeErrors(err)});
        });     
    };
}


export {
    create
}