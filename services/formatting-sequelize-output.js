

function formattingOutput(arrayOfModels){
    const formatedArray = [];

    for(let i=0; i < arrayOfModels.length;i++){
        formatedArray.push(arrayOfModels[i].dataValues);
    }

    return formatedArray;
   
}

export {
    formattingOutput
}