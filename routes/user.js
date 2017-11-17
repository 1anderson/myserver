import Router from 'express';
const userRouter = Router();
import * as userValidator from '../validators/user';
import * as userController from '../controllers/user';

export default (models) => {
    userRouter.post('',userValidator.validatingForCreation,userController.createUser(models));
    userRouter.post('/login',userValidator.loginValidation,userController.login(models));
    userRouter.get('/registration-confirmation/:email_confirmation_token',userValidator.loginValidation,userController.login(models));
    return userRouter;
};