import {Router} from 'express';
import blogPostRouter from './blog-posts/blog-post.router';
import userRouter from './users/users.router';

const router = Router();

router.use('/blogposts', blogPostRouter);
router.use('/users', userRouter);

export default router;

