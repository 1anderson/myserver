const express = require('express');
const router = express.Router();
const models  = require('../models');

router.get('', function (req, res) {
    console.log("Entrou");
    models.User.findAll().then((users) => console.log(users));
})

module.exports = router;