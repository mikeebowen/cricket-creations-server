import {Op} from 'sequelize';
import {sign} from 'jsonwebtoken';
import {pick} from 'lodash';
import db from '../../db/models';

const {User} = db;

export default class UserService {
  static async all(options) {
    try {
      return await User.findAll(options);
    } catch (err) {
      return err;
    }
  }

  static async login(options) {
    try {
      const {name, password} = options;
      const user = await User.findOne({
        where: {[Op.or]: [{email: name}, {username: name}]},
        attributes: ['id', 'username', 'email', 'password'],
      });
      if (!user) {
        const err = new Error('user not found');
        err.status = 404;
        return Promise.reject(err);
      }
      const validPW = await user.validPassword(password);

      return new Promise((resolve, reject) => {
        if (validPW) {
          const {env: {JWT_ISSUER: issuer, JWT_SECRET, JWT_EXPIRATION: expiresIn}} = process;
          const data = pick(user, ['id', 'username', 'email']);
          const token = sign(data, JWT_SECRET, {expiresIn, issuer});
          resolve({token});
        } else {
          const err = new Error('invalid password');
          err.status = 401;
          reject(err);
        }
      });
    } catch (err) {
      return err;
    }
  }

  static async create(data) {
    try {
      return await User.create(data);
    } catch (err) {
      return err;
    }
  }
}
