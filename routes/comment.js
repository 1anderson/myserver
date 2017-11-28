
import Router from 'express';
import * as commentValidator from '../validators/comment';
import * as commentController from '../controllers/comment';
const commentRouter = Router();



export default (models) => {

    commentRouter.post('', commentValidator.create, commentController.create(models));

    return commentRouter;
}