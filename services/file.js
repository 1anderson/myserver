"use strict";

const fs = require('fs-extra');

function movefiles(postId, files){
     
    return new Promise((resolve, reject) => {
     const date = new Date();
     const path = `./files/post/${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
        createDir(`${path}/${postId}`)
            .then(()=>{
                if(files.constructor!==Array) files = [files];
                console.log(files);
                for (let i=0;i<files.length;i++){
                    files[i].mv(`${path}/${postId}/${files[i].name}.html`,(res)=>{
                        if(res){
                            reject(res);
                        }
                    });
                }
        }).catch((err)=>{
            reject(err);
        });
        resolve(`${path}/${postId}`);
    });
};

function createDir(path){
    return fs.mkdirs(path);
}
export {
    movefiles
}