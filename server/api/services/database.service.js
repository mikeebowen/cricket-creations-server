import db from '../../db/models';

export default class DatabaseService {
  model;

  constructor(model) {
    this.model = model;
  }

  async all() {
    try {
      return await db[this.model].findAll();
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
}
