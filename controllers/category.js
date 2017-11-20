
"use strict";

function createCategory(models){
    return (req, res, next)=>{
        models.Category.create({
            category_name: req.body.category_name
        }).then((category)=>{
            res.status(201).json({msg: 'Category create successfully'})
        }).catch((err)=>{
            res.status(500).json({msg: 'Internal Error'});
            console.log(err);
        });
    }
}

export {
    createCategory
}