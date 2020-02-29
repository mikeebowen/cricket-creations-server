import {Router} from 'express';
import blogPostRouter from './blogPost/blogPostRouter';
import exampleRouter from './examples/router';
import userRouter from './user/userRouter';

const router = Router();

router.use('/blogposts', blogPostRouter);
router.use('/examples', exampleRouter);
router.use('/users', userRouter);

export default router;

