
const path = require('path');
const fs = require('fs');
const basename = __filename;
const schemes = {}

schemes.getScheme = (model) => {
    return import(`./${model.name.toLowerCase()}`);
}

export {
    schemes
}