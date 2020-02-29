import {Router} from 'express';
import UserController from './userController';

const router = Router();

const userController = new UserController();

router.route('/')
  .get((...args) => userController.all(...args))
  .post((...args) => userController.create(...args));

export default router;
