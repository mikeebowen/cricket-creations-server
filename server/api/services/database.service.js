import db from '../../db/models';

export default class DatabaseService {
  model;

  constructor(model) {
    this.model = model;
  }

  async all(options) {
    try {
      return await db[this.model].findAll(options);
    } catch (err) {
      return err;
    }
  }

  async one(options) {
    try {
      return await db[this.model].findOne(options);
    } catch (err) {
      return err;
    }
  }

  async create(data) {
    try {
      return await db[this.model].create(data);
    } catch (err) {
      return err;
    }
  }

  getQuery() {

  }
}
