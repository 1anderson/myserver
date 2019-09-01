"use strict";
import Router from 'express';
const themeRouter = Router();

import * as themeController from '../controllers/theme';

export default(models) => {
    themeRouter.get('', themeController.getAll(models));
    themeRouter.post('', themeController.create(models));
    return themeRouter;
};