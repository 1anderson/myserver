import express from 'express';
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const validator = require('express-validator');
const models  = require('./models');
var jwt = require('jsonwebtoken');

import userRouter from './routes/user';
import authorRouter from './routes/author';
import categoryRouter from './routes/category';
import subCategoryRouter from './routes/subcategory';
import postRouter from './routes/post';
import commentRouter from './routes/comment';
import * as information from './services/information';


information.loadAccountStatus(models);

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
app.use('/author', authorRouter(models));
app.use('/category', categoryRouter(models));
app.use('/subcategory', subCategoryRouter(models));
app.use('/post', postRouter(models));
app.use('/comment', commentRouter(models));
export { app };





