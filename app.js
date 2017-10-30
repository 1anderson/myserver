const express = require('express')
const app = express()
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
import {userRouter} from './routes/user.router';
//const models  = require('../models');
//console.log(userRouter);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use('/user', userRouter);

export { app };





