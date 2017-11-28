

function create(req, res, next){
    req.checkBody('text',' text  must be between one and two hundred and fifty five characters').isLength({min:1, max: 255});
    req.checkBody('date_of_comment',' date must be in the standard iso 8601').isISO8601();
    req.checkBody('post_id',' must be an integer value').isInt();
    req.checkBody('user_profile_id',' must be an integer value').isInt();
    req.validationErrors()===false? next():res.send(req.validationErrors());
}

export {
    create
}