import {Router} from 'express';
import BlogPostController from './blog-post.controller';
import validateToken from '../../middlewares/validate.token';

const router = Router();

router.route('/')
  .get(BlogPostController.all)
  .post(validateToken, BlogPostController.create);

export default router;
