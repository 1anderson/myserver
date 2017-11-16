'use Strict'

var bcrypt = require('bcryptjs');

function generatedHash(password,salt){
    return new Promise((resolve, reject)=>{
        bcrypt.genSalt(salt, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                resolve(hash); 
            });
        });
    });
}

function comparingPasswordHash(hashOne, hashTwo){
    return bcrypt.compare(hashOne, hashTwo);
}

export {
    comparingPasswordHash,
    generatedHash
}

