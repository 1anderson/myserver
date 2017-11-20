"use strict"

import Router from 'express';
const subcategoryRouter = Router();
import * as subCategoryValidator from '../validators/subcategory';
import * as subCategoryController from '../controllers/sub_category'; 


export default (models)=>{
    subcategoryRouter.post('',subCategoryValidator.create, subCategoryController.create(models));
    return subcategoryRouter;
};