"use strict";

const fs = require('fs-extra');
const readFilePromise = require('fs-readfile-promise');

function movefiles(postId, files, existingPath){

    return new Promise((resolve, reject) => {
     const date = new Date();
     const path = existingPath===undefined ? `./files/post/${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`: existingPath;
        createDir(`${path}/${postId}`)
            .then(()=>{
                if(files.constructor!==Array) files = [files];
                for (let i=0;i<files.length;i++){
                    files[i].mv(`${path}/${postId}/${files[i].name}.html`,(res)=> {
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


async function getFile (path) {
    return await readFilePromise(path);
}

export {
    movefiles,
    getFile
}