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

export {
    generatePasswordHash
}
