import {Router} from 'express';
import UserController from './users.controller';
import validateToken from '../../middlewares/validate.token';

const router = Router();


router.route('/')
  .get(validateToken, (...args) => UserController.all(...args))
  .post((...args) => UserController.create(...args));

router.route('/login')
  .post((...args) => UserController.login(...args));

export default router;
