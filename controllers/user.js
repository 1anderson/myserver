'use strict'
import * as passwordService from '../services/password';
import * as emailService from '../services/email'; 
import {accountStatus} from '../services/information';

function createUser(models){
    return (req, res, next) =>{
        createUserProfile(models, req.body).then((user)=> 
            createAccount(models, req.body, user.user_profile_id))
         .then((userAccount)=>{
            res.status(201).json({msg: `user created successfully`})
         });
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
            Promise.all([passwordService.generatedHash(userAccountData.password,10),
                    passwordService.generatedHash(userAccountData.name+userAccountData.last_name+userAccountData.email,1)])
             .then((values)=>{
                 console.log(values);
                models.User_account.create({
                    user_account_id: profileId,
                    password: values[0],
                    role: userAccountData.role,
                    date_of_creation : new Date(),
                    email: userAccountData.email,
                    registration_time: new Date(), 
                    email_confirmation_token: values[1],
                    password_reminder_token: null,
                    password_reminder_expire: null,
                    user_account_status_fk: accountStatus.PENDING
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
            .then(user => {
                if(user){
                    passwordService.comparingPasswordHash(req.body.password,user.password)
                    .then((resp)=>{
                        resp===true?res.status(201).json({msg:'valid user'}):res.status(401).json({msg:'user invalid'});
                    }).catch((err)=>console.log(err));
                }else{
                    res.status(401).json({msg:'user not exist'});
                }
            });
           
    };
};

export {
    createUser,
    login
}