module.exports = function (app) {
    var path = require('path');

    var uriBase = '/admin';

    app.get(uriBase + '/', function (req, res) {
        res.render(__dirname + '/views/index', { user: req.user });
    });

    var apiBase = uriBase + '/api';

    require('./api/api.routes.events')(app, apiBase);
};