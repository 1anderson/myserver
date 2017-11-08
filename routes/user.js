import Router from 'express';
const userRouter = Router();
import userValidator from '../validators/user';
export default (models) => {
    userRouter.get('', function (req, res) {
        userValidator.loginValidator();
        // models.User.findAll().then((users) => console.log(users));
    })
    
    return userRouter;
};