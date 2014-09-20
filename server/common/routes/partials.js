module.exports = function (app) {
    'use strict';

    app.get('/partials/*', function (req, res) {
        res.render('../../../public/modules' + req.params);
    });
};