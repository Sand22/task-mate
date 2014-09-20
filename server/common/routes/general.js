module.exports = function(app) {
    'use strict';

    app.all('/api/*', function(req, res) {
        res.send(404);
    });

    app.get('*', function(req, res) {
        res.render('index');
    });

};