


function create(req, res, next){
    req.checkBody('title', 'title must be between one and twenty characters').isLength({min:1, max: 20});
    req.checkBody('description', 'description must be between one and twenty characters').isLength({min:1, max: 20});
    req.checkBody('user_profile_id', 'must be an integer value').isInt();
    req.checkBody('category_id', 'must be an integer value').isInt();
    req.checkBody('sub_category_id', 'must be an integer value').isInt();
    
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