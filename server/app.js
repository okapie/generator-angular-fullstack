
/**
 * Main application file
 */

'use strict';

import express from 'express';
var sqldb = require('./sqldb');
import config from './config/environment';
import http from 'http';
var app = express();
import path from 'path';

// Populate databases with sample data
if (config.seedDB) { require('./config/seed'); }

var server = http.createServer(app).listen(config.port, config.ip, function() {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});
var socketio = require('socket.io')(server, {
  serveClient: config.env !== 'production',
  path: '/socket.io-client'
});

require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(app);

// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

sqldb.sequelize.sync()
 .then(startServer)
 .catch(function(err) {
   console.log('Server failed to start due to error: %s', err);
 });

module.exports = app;