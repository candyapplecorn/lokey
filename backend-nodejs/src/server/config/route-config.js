(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const usersRoutes = require('../routes/users');
    const userRoutes = require('../routes/user');
    const sessionRoutes = require('../routes/session');
    const activityRoutes = require('../routes/activities');
    const eventRoutes = require('../routes/events');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/api/users', usersRoutes);
    app.use('/api/session', sessionRoutes);
    app.use('/api/activities', activityRoutes);
    app.use('/api/events', eventRoutes);
    // app.use('/', userRoutes);

  };

})(module.exports);
