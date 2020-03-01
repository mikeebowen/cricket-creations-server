import {Router} from 'express';
import BlogPostController from './blog-post.controller';


const router = Router();

const blogPostController = new BlogPostController();
router.route('/')
  .get((...args) => blogPostController.all(...args));

export default router;
