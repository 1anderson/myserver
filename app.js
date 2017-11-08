import express from 'express';
const app = express();
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
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
app.use('/user', userRouter(models));

export { app };





