'use strict'
var jwt = require('jsonwebtoken');
import * as passwordService from '../services/password';
import * as emailService from '../services/email'; 
import {accountStatus} from '../services/information';
import {formatingSequelizeErrors} from '../services/error-monitoring';


function createUser(models){
    return (req, res, next) =>{
        createUserProfile(models, req.body).then((user)=> 
            createAccount(models, req.body, user.user_profile_id))
         .then((userAccount)=>{
            res.status(201).json({msg: `user created successfully`})
         }).catch((err)=>{
            res.status(400).json({msg: formatingSequelizeErrors(err)});
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
            passwordService.generatedHash(userAccountData.password,10)
                .then((passwordHash) => {
                  models.User_account.create({
                        user_account_id: profileId,
                        password: passwordHash,
                        role: userAccountData.role,
                        date_of_creation : new Date(),
                        email: userAccountData.email,
                        active_account: false,
                        password_reminder_token: null,
                        password_reminder_expire: null,
                        user_account_status_fk: accountStatus.PENDING
                   }).then((userAccount)=> {
                    jwt.sign({
                        data: userAccount.user_account_id
                      }, 'secret123', { expiresIn: '1h' },(err, token)=>{
                        emailService.sendAuthorizationEmail(token,userAccount.email);
                    });
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
            attributes: ['password','active_account']
          })
            .then(user => {
               if(!user){
                    res.status(401).json({msg:'user not exist'});
                } else if(user.dataValues.active_account){
                    passwordService.comparingPasswordHash(req.body.password,user.password)
                    .then((resp)=>{
                        resp===true?res.status(201).json({msg:'valid user'}):res.status(401).json({msg:'user invalid'});
                    }).catch((err)=>console.log(err));
                }else{
                    res.status(401).json({msg:'check your email to finalize your registration'});
                }
            });
           
    };
};

function registrationConfirmation(models){
        return (req, res, next)=>{
            jwt.verify( req.params.email_confirmation_token, 'secret123', function(err, decoded) {
                if(decoded){
                    models.User_account.findById(decoded.data)
                        .then(user_account => {
                            user_account.update({
                                active_account:true,     
                            }).then((row)=>{
                                res.status(200).json({msg: 'account active!'});
                            });
                        });
                }else{
                    res.status(401).json({msg: err});
                };
              });
        };
};

export {
    createUser,
    login,
    registrationConfirmation
}