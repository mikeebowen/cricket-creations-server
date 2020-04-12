import {Router} from 'express';
import UserController from './users.controller';
import validateToken from '../../middlewares/validate.token';

const router = Router();


router.route('/')
  .get(validateToken, UserController.all)
  .post(UserController.create);

router.route('/login')
  .post(UserController.login);

export default router;
