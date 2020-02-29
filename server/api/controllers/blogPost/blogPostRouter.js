import * as express from 'express';
import BlogPostController from './blogPostController';


const router = express.Router();

const blogPostController = new BlogPostController();
router.route('/')
  .get((...args) => blogPostController.all(...args));

export default router;
