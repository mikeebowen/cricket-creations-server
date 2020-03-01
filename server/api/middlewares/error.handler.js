import l from '../../common/logger';
// eslint-disable-next-line no-unused-vars, no-shadow
export default function errorHandler(err, req, res, next) {
  l.error(err);
  const errors = err.errors || [{message: err.message}];
  res.status(err.status || 500).json(errors);
}

