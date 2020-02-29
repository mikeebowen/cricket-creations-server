import DatabaseService from '../../services/database.service';

export default class UserController {
  userController = new DatabaseService('User');

  async all(req, res, next) {
    try {
      const allUsers = await this.userController.all();
      res.json(allUsers);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const newUser = await this.userController.create(req.body.data);
      res.json(newUser);
    } catch (err) {
      next(err);
    }
  }
}
