/**
 * Main application routes
 */

'use strict';

import errors from './components/errors/index';
import api from './api/index';
import path from 'path';

module.exports = (app) => {
  app.use('/api', api);
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);
  app.route('/*', (req, res) => {
    res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
  });
}