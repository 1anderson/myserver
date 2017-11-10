'use strict'
var bcrypt = require('bcryptjs');
function createUser(models){
    return (req, res, next) =>{

        models.User_profile.create({
            name: req.body.name,
            last_name: req.body.last_name,
            email: req.body.email
        }).then((user)=>{
            res.status(201).json({msg:`user ${user.name} created successfully`});
        },(error)=>{
            res.status(500).json({msg:' Internal Server Error”'});
        });
        
    };
};

function createAccount(models,userProfileId){
        if(!userProfileId){
            models.User_account.create({

            });
        }
}

export {
    createUser
}