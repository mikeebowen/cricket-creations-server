import Express from 'express';
import {join} from 'path';
import {OpenApiValidator} from 'express-openapi-validator';
import errorHandler from '../api/middlewares/error.handler';


export default function oas(app, routes) {
  const apiSpec = join(__dirname, 'api.yml');
  const validateResponses = !!(
    process.env.OPENAPI_ENABLE_RESPONSE_VALIDATION
    && process.env.OPENAPI_ENABLE_RESPONSE_VALIDATION.toLowerCase() === 'true'
  );
  return new OpenApiValidator({
    apiSpec,
    validateResponses,
  })
    .install(app)
    .then(() => {
      app.use(process.env.OPENAPI_SPEC || '/spec', Express.static(apiSpec));
      routes(app);
      app.use(errorHandler);
    });
}
