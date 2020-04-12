import db from '../../db/models';

const {BlogPost} = db;

export default class BlogPostService {
  static async all(options) {
    try {
      return await BlogPost.findAll(options);
    } catch (err) {
      return err;
    }
  }

  static async one(options) {
    try {
      return await BlogPost.findOne(options);
    } catch (err) {
      return err;
    }
  }

  static async create(data) {
    try {
      const valid = await BlogPost.validate(data);
      if (valid) {
        return await BlogPost.create(data);
      }
      const err = new Error('Invalid post data');
      err.status = 422;
      return err;
    } catch (err) {
      return err;
    }
  }
}
