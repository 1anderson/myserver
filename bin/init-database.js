
const sequelizeFixtures = require('sequelize-fixtures');
const models = require('../models');


models.sequelize.sync().then(function() {
        sequelizeFixtures.loadFile('./fixtures/data-default.json', models).then(function(){
                console.log("initialization completed");
                process.exit();
        });
});




