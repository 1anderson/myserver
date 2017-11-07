//const express = require('express');
//const userRouter = express.Router();
import express from 'express';
let userRouter = express.Router();

export default () => {
    userRouter.get('', function (req, res) {
        console.log("Entrou");
        models.User.findAll().then((users) => console.log(users));
    });
    
    return userRouter;
};