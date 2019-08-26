


function create(req, res, next){
    req.checkBody('title', 'title must be between 1 and 150 characters').isLength({min:1, max: 150});
    req.checkBody('description', 'description must be between 1 and 500 characters').isLength({min:1, max: 500});
    req.checkBody('author_id', 'must be an integer value').isInt();
    req.checkBody('category_id', 'must be an integer value').isInt();
    req.checkBody('subcategory_id', 'must be an integer value').isInt();
    
    // if(req.hasOwnProperty('files')){
    //     console.log(req.files);
    //     req.check('files').custom((value)=>{
    //         if(!req.files.hasOwnProperty('files')){
    //             throw new Error('Input name should be file');
    //         }
    //     });
    // }
    
    req.validationErrors()===false? next():res.send(req.validationErrors());
}

export {
    create
}