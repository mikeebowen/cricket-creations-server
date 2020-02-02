import ExamplesService from '../../services/examples.service';

export class Controller {
  exampleService = ExamplesService;

  all(req, res) {
    this.exampleService.all()
      .then(r => res.json(r));
  }

  byId(req, res) {
    this.exampleService
      .byId(req.params.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }

  create(req, res) {
    this.exampleService
      .create(req.body.name)
      .then(r => res
        .status(201)
        .location(`/api/v1/examples/${r.id}`)
        .json(r));
  }
}
export default new Controller();
