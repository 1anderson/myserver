const Serializer = require('sequelize-to-json');
import { schemes } from '../models_scheme/schemes';


const Jsonformater = {};

Jsonformater.formater = async (model, data) => {
    try {
        const scheme = await schemes.getScheme(model);
        let serializer = new Serializer(model, scheme[model.name.toLowerCase()]);
        return serializer.serialize(data);
    }
    catch (err) {
        return console.log(err);
    }
}

Jsonformater.formaterMany = async (model, data) => {
    try {
        const scheme = await schemes.getScheme(model);
        return Serializer.serializeMany(data, model, scheme[model.name.toLowerCase()+'s']);
    }
    catch (err) {
        return console.log(err);
    }
}




export {
    Jsonformater
}