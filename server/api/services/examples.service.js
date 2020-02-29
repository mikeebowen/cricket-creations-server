import l from '../../common/logger';
import db from './examples.db.service';
import db2 from '../../db/models';

class ExamplesService {
  all() {
    l.info(`${this.constructor.name}.all()`);
    return db.all();
    // return Promise.resolve(db2.BlogPost.findAll());
  }

  byId(id) {
    l.info(`${this.constructor.name}.byId(${id})`);
    return db.byId(id);
  }

  static create(name) {
    return db.insert(name);
  }
}

export default new ExamplesService();
