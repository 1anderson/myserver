
function movefiles(files){
     const date = new Date();
    // return new Promise((resolve, reject) => {
        console.log(files);
        for (let i=0;i<files.length;i++){
            files[i].foo.mv(`./files/post/${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`)
                .then((status) => {
                    if(status){
                        res.status(500).json({msg: "Fatal Error"});
                        return;
                    }
                });
        }
        res.status(200).json({msg: "sucesso"});
    // });
}

export {
    movefiles
}