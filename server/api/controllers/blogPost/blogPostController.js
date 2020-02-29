import DatabaseService from '../../services/database.service';

export default class BlogPostController {
  blogPostService = new DatabaseService('BlogPost');

  data = []

  async all(req, res, next) {
    try {
      const data = await this.blogPostService.all();
      // res.json(this.data);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }
}
