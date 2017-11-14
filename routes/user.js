import Router from 'express';
const userRouter = Router();
import * as userValidator from '../validators/user';
import * as userController from '../controllers/user';
import {hashPasswordOnRequisition} from '../services/password'

export default (models) => {
    userRouter.post('',userValidator.validatingForCreation,userController.createUser(models));
    userRouter.post('/login',userValidator.loginValidation,hashPasswordOnRequisition,userController.login(models));
    return userRouter;
};