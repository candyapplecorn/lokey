(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const usersRoutes = require('../routes/users');
    const userRoutes = require('../routes/user');
    const sessionRoutes = require('../routes/session');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/api/users', usersRoutes);
    app.use('/api/session', sessionRoutes);
    // app.use('/', userRoutes);

  };

})(module.exports);
