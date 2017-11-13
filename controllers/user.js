'use strict'
import * as passwordService from '../services/password'; 

function createUser(models){
    return (req, res, next) =>{
        createUserProfile(models, req.body).then((user)=> 
            createAccount(models, req.body,user.user_profile_id))
         .then((userAccount)=>
            res.status(201).json({msg: `user created successfully`}));
    };
};

function createUserProfile(models, userProfileData){
    return new Promise((resolve, reject)=>{
        models.User_profile.create({
            name: userProfileData.name,
            last_name: userProfileData.last_name,
            email: userProfileData.email
        }).then((user)=>{
            resolve(user);
        },(error)=>{
            reject(error);
        });
    });
};

function createAccount(models, userAccountData, profileId){
        return new Promise((resolve, reject)=>{
            passwordService.generatePasswordHash(userAccountData.password).then((hash)=>{
                models.User_account.create({
                    user_account_id: profileId,
                    password: hash,
                    role: userAccountData.role,
                    date_of_creation : new Date(),
                    email: userAccountData.email,
                    //registration_time,
                    //email_confirmation_token,
                    password_reminder_token: null,
                    password_reminder_expire: null,
                    user_account_status_fk: 1
                   }).then((userAccount)=>{
                   resolve(userAccount);
                },(error)=>{
                    console.log(error);
                    reject(error);
                });

            });
        });
};


function login(models){
    return (req, res, next) =>{
        models.User_account.findOne({
            where: {email: req.body.email},
            attributes: ['password']
          })
            .then(user => passwordService.comparingPasswordHash(req.body.password,user.password))
            .then(()=>{
                res.status(201).json({msg:'valid user'});
            }),()=>{
                res.status(404).json({msg:'user invalid'});
            }
    };
};
    


export {
    createUser,
    login
}