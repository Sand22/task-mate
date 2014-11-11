var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
var config = require('./server/config/config')[env];

var app = express();

require('./server/config/express')(app, config);
require('./server/routes/partials')(app);
require('./server/routes/general')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');
