import BlogPostService from '../../services/blog-post.service';

export default class BlogPostController {
  static async all(req, res, next) {
    try {
      const data = await BlogPostService.all();
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const data = await BlogPostService.create(req.body);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }
}
