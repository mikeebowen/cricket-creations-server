import pino from 'pino';
import {existsSync, writeFile} from 'fs';
import {forEach} from 'lodash';
// import '../../log/dev-log';
import {join} from 'path';
const nodeEnv = process.env.NODE_ENV?.toLowerCase();
const logFilePath = join(__dirname, '..', '..', 'log', nodeEnv === 'production' ||  nodeEnv === 'prod' ? 'log' : 'dev-log');

if (!existsSync(logFilePath)) {
  writeFile(logFilePath, '', err => {
    if (err) throw err;
  });
}

const l = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL,
}, pino.destination(logFilePath));

export default l;
