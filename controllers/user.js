'use strict'

function createUser(userProfile){
    return (req, res, next) =>{
        userProfile.create({
            name: 'Anderson',
            last_name: 'allan',
            email: 'anderson.allan.sobral@gmail.com'
        }).then((user)=>{
            console.log(user);
        });
        res.send(201);
        next();  
    };
    
}


export {
    createUser
}