import {verify} from 'jsonwebtoken';

const {env: {JWT_SECRET, JWT_ISSUER: issuer, JWT_EXPIRATION: expiresIn}} = process;

export default function validateToken(req, res, next) {
  const {headers: {authorization}} = req;

  if (authorization) {
    const token = authorization.split(' ')[1];
    const options = {expiresIn, issuer};

    try {
      const user = verify(token, JWT_SECRET, options);

      req.user = user;
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next({status: 401, message: 'Authorization Token required'});
  }
}
