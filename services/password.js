'use Strict'

var bcrypt = require('bcryptjs');

function generatePasswordHash(password){
    return new Promise((resolve, reject)=>{
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                resolve(hash); 
            });
        });
    });
}

function comparingPasswordHash(hashOne, hashTwo){
    return bcrypt.compare(hashOne, hashTwo);
}

function generatingHash(string){
    return new Promise((resolve, reject)=>{
        bcrypt.genSalt(1, function(err, salt) {
            bcrypt.hash(string, salt, function(err, hash) {
                resolve(hash); 
            });
        });
    });
}

export {
    generatePasswordHash,
    comparingPasswordHash,
    generatingHash
}
