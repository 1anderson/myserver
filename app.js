import express from 'express';
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const validator = require('express-validator');
import userRouter from './routes/user';
const models  = require('./models');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(validator());
app.use('/user', userRouter(models));

export { app };





