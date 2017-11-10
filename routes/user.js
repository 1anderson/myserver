import Router from 'express';
const userRouter = Router();
import * as userValidator from '../validators/user';
import * as userController from '../controllers/user';
export default (models) => {
    userRouter.post('',userValidator.validatingForCreation,userController.createUser(models.User_profile));
    
    return userRouter;
};