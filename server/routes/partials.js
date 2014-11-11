module.exports = function (app) {
  'use strict';

  app.get('/views/*', function (req, res) {
    res.render('../../public/' + req.params[0]);
  });
};
