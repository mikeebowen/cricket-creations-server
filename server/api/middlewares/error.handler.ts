import {Request, Response, NextFunction} from 'express';
import l from '../../common/logger';


// eslint-disable-next-line no-unused-vars, no-shadow
export default function errorHandler(err, req: Request, res: Response, next: NextFunction) {
  const errors = err.errors || [{message: err.message}];
  l.error(errors);
  res.status(err.status || 500).json({errors});
}

