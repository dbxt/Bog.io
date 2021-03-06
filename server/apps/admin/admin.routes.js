module.exports = function (app, express) {
    var path = require('path');
    var errorHandler = require('errorhandler');
    var uriBase = '/admin';

    // Environment specific configs
    var asset_location = 'src';
    switch (app.get('env')) {
        case 'development':
            app.use(errorHandler());
            break;
        case 'staging':
            //asset_location = 'dist';
            break;
        case 'production':
            //asset_location = 'dist';
            break;
    }

    // Dashboard Static Paths
    app.use(uriBase + '/', express.static(path.join(__dirname, '../../../client/apps/admin')));
    app.use(uriBase + '/scripts', express.static(path.join(__dirname, '../../../client/apps/admin/' + asset_location + '/scripts')));
    app.use(uriBase + '/styles', express.static(path.join(__dirname, '../../../client/apps/admin/' + asset_location + '/styles')));
    app.use(uriBase + '/templates', express.static(path.join(__dirname, '../../../client/apps/admin/' + asset_location + '/templates')));

    // Shared Resource Paths
    app.use(uriBase + '/lib', express.static(path.join(__dirname, '../../../client/lib')));
    app.use(uriBase + '/img', express.static(path.join(__dirname, '../../../client/img')));

    app.get(uriBase + '/', function (req, res) {
        res.render(__dirname + '/views/index', { user: req.user });
    });

    require('./api/api.routes.events')(app, uriBase + '/api');
};