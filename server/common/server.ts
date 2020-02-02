import express, {Application} from 'express';
import {normalize} from 'path';
import {json, urlencoded, text} from 'body-parser';
import http from 'http';
import os from 'os';
import cookieParser from 'cookie-parser';

import l from './logger';

import installValidator from './openapi';

const app = express();
const exit = process.exit;

export default class ExpressServer {
  private routes: (app: Application) => void;
  constructor() {
    const root = normalize(__dirname + '/../..');
    app.set('appPath', root + 'client');
    app.use(json({limit: process.env.REQUEST_LIMIT || '100kb'}));
    app.use(
      urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || '100kb',
      }),
    );
    app.use(text({limit: process.env.REQUEST_LIMIT || '100kb'}));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(express.static(`${root}/public`));
  }

  router(routes: (app: Application) => void): ExpressServer {
    this.routes = routes;
    return this;
  }
  listen(port: number): Application {
    const welcome = (p: number) => (): void =>
      l.info(
        `up and running in ${process.env.NODE_ENV ||
          'development'} @: ${os.hostname()} on port: ${p}}`,
      );

    installValidator(app, this.routes)
      .then(() => {
        http.createServer(app).listen(port, welcome(port));
      })
      .catch(e => {
        l.error(e);
        exit(1);
      });

    return app;
  }
}
