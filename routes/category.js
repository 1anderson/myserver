"use strict";

import Router from 'express';
const categoryRouter = Router();
import * as categoryValidator from '../validators/category';
import * as categoryController from '../controllers/category';


export default (models)=>{
    categoryRouter.post('', categoryValidator.create, categoryController.createCategory(models));
    categoryRouter.get('', categoryController.getAll(models));
    return categoryRouter;
}

