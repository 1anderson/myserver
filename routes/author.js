import Router from 'express';
const authorRouter = Router();
import * as userValidator from '../validators/user';
import * as authorController from '../controllers/author';

export default (models) => {
    authorRouter.post('', authorController.createAuthor(models));
    authorRouter.get('', authorController.getAll(models));
    return authorRouter;
};