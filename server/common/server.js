import Express from 'express';
import {normalize} from 'path';
import {json, urlencoded, text} from 'body-parser';
import {createServer} from 'http';
import {hostname} from 'os';
import cookieParser from 'cookie-parser';

import oas from './oas';

import l from './logger';

const app = new Express();
const {exit} = process;

export default class ExpressServer {
  constructor() {
    const root = normalize(`${__dirname}/../..`);
    app.set('appPath', `${root}client`);
    app.use(json({limit: process.env.REQUEST_LIMIT || '100kb'}));
    app.use(urlencoded({extended: true, limit: process.env.REQUEST_LIMIT || '100kb'}));
    app.use(text({limit: process.env.REQUEST_LIMIT || '100kb'}));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(Express.static(`${root}/public`));
  }

  router(routes) {
    this.routes = routes;
    return this;
  }

  listen(port = process.env.PORT) {
    const welcome = p => () => l.info(
      `up and running in ${process.env.NODE_ENV
          || 'development'} @: ${hostname()} on port: ${p}}`,
    );

    oas(app, this.routes).then(() => {
      createServer(app).listen(port, welcome(port));
    }).catch(e => {
      l.error(e);
      exit(1);
    });
    return app;
  }
}
