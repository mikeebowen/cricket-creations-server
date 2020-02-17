import db from '../../db/models';

export default class BlogPostService {
  static async all() {
    try {
      return await db.BlogPost.findAll();
    } catch (err) {
      return err;
    }
  }
}
