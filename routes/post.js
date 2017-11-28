"use strict";
import Router from 'express';
const postRouter = Router();

import * as postValidator from '../validators/post';
import * as postController from '../controllers/post';


export default (models) => {
    
    postRouter.post('', postValidator.create, postController.create(models));
    postRouter.get('', postController.getAll(models));
    
    return postRouter;
};
