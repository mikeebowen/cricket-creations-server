/* eslint-disable class-methods-use-this */
import ExamplesService from '../../services/examples.service';

export class Controller {
  exampleService = ExamplesService;

  async all(req, res) {
    try {
      const r = await ExamplesService.all();
      res.json(r);
    } catch (err) {
      console.error(err);
    }
  }

  byId(req, res) {
    ExamplesService
      .byId(req.params.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }

  create(req, res) {
    ExamplesService
      .create(req.body.name)
      .then(r => res
        .status(201)
        .location(`/api/v1/examples/${r.id}`)
        .json(r));
  }
}
export default new Controller();
