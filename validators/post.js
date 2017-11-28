


function create(req, res, next){
    req.checkBody('title', 'title must be between one and twenty characters').isLength({min:1, max: 20});
    req.checkBody('description', 'description must be between one and twenty characters').isLength({min:1, max: 20});
    req.checkBody('body', 'body must be between one and sixty-five thousand characters').isLength({min:1, max: 65000});
    
    if(req.hasOwnProperty('files')){
        console.log(req.files);
        req.check('files.files').custom((value)=>{
            if(!req.files.hasOwnProperty('files')){
                throw new Error('Input name should be files');
            } 
        });
    }
    
    req.validationErrors()===false? next():res.send(req.validationErrors());
}

export{
    create
}