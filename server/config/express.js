var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

module.exports = function (app, config) {
  'use strict';

  app.set('views', config.rootPath + '/server/views');
  app.set('view engine', 'jade');
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(express.static(config.rootPath + '/public'));

};
