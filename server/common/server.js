import Express from 'express';
import {normalize} from 'path';
import {json, urlencoded, text} from 'body-parser';
import {createServer} from 'http';
import {hostname} from 'os';
import cookieParser from 'cookie-parser';
import errorHandler from '../api/middlewares/error.handler';

import l from './logger';

const app = new Express();
const {REQUEST_LIMIT, SESSION_SECRET, PORT, NODE_ENV} = process.env;
export default class ExpressServer {
  constructor() {
    const root = normalize(`${__dirname}/../..`);
    app.set('appPath', `${root}client`);
    app.use(json({limit: REQUEST_LIMIT || '100kb'}));
    app.use(urlencoded({extended: true, limit: REQUEST_LIMIT || '100kb'}));
    app.use(text({limit: REQUEST_LIMIT || '100kb'}));
    app.use(cookieParser(SESSION_SECRET));
  }

  router(routes) {
    this.routes = routes;
    return this;
  }

  listen(port = PORT) {
    const welcome = p => () => l.info(`up and running in ${NODE_ENV || 'development'} @: ${hostname()} on port: ${p}}`);

    createServer(app).listen(port, welcome(port));
    this.routes(app);
    app.use(errorHandler);
    return app;
  }
}
