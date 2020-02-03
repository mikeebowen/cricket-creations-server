

import {readdirSync, existsSync, mkdir} from 'fs';
import {basename, join} from 'path';
import {Sequelize} from 'sequelize';
import l from '../common/logger';

const bn = basename(__filename);
const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
const config = require(`${__dirname}/../config/config.json`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== bn) && (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = sequelize.import(join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
const startSequelize = (sql, log) => {
  sql.sync();
  sql
    .authenticate()
    .then(() => {
      log.info('Connection has been established successfully.');
    })
    .catch(error => {
      log.error(error);
    });
};
const dbDir = join('..', 'db');
if (!existsSync(dbDir)) {
  mkdir(dbDir, err => {
    if (err) l.error(err.message);
    startSequelize(sequelize, l);
  });
} else {
  startSequelize(sequelize, l);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
export default db;
