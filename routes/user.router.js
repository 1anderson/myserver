const express = require('express');
const userRouter = express.Router();
const models  = require('../models');
userRouter.get('', function (req, res) {
    console.log("Entrou");
    models.User.findAll().then((users) => console.log(users));
})

export { userRouter };