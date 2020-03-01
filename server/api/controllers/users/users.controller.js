import {pick, has} from 'lodash';
import UserService from '../../services/user.service';

export default class UserController {
  static async all(req, res, next) {
    try {
      const allUsers = await UserService.all();
      res.json(allUsers);
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const {body} = req;
      const query = pick(body, ['name', 'password']);

      if (!has(query, 'password')) {
        return next({status: 417, message: 'Login request body must include password'});
      }

      if (has(query, 'name')) {
        const user = await UserService.login(query);
        res.status = 200;
        return res.json(user);
      }
      return next({status: 417, message: 'Login request body must include username or email'});
    } catch (err) {
      return next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const newUser = await UserService.create(req.body.data);
      res.json(newUser);
    } catch (err) {
      next(err);
    }
  }
}
