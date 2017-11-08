(function(appConfig) {

  'use strict';

  // *** main dependencies *** //
  const path = require('path');
  const cookieParser = require('cookie-parser');
  const bodyParser = require('body-parser');
  const session = require('express-session');
  const Pool = require('pg-pool');
  const pg = require('pg');
  const pgSession = require('connect-pg-simple')(session);
  const flash = require('connect-flash');
  const morgan = require('morgan');
  const morganBody = require('morgan-body');
  const nunjucks = require('nunjucks');
  const passport = require('passport');
  const url = require('url');
  //const compression = require('compression');

  // *** view folders *** //
  const viewFolders = [
    path.join(__dirname, '..', 'views')
  ];

  // *** load environment variables *** //
  require('dotenv').config();

  appConfig.init = function(app, express) {

    // *** view engine *** //
    nunjucks.configure(viewFolders, {
      express: app,
      autoescape: false // DANGEROUS!
    });
    app.set('view engine', 'html');

    //app.use(compression());
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true })); // Rails just makes this werk, but I had to figure this out!

    // uncomment if using express-session
    var pgPool = new pg.Pool({
      // Insert pool options here
      host: 'localhost',
      database: 'passport_local_knex'
    });

    if (process.env.NODE_ENV == 'production'){
      var params = url.parse(process.env.DATABASE_URL);
      var auth = params.auth.split(':');

      var pconfig = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true
      };
    }

    const pool = process.env.NODE_ENV !== 'production' ? pgPool : new Pool(pconfig);

    app.use(session({
      store: new pgSession({
        pool,
        tableName: 'sessions'
      }),
      secret: process.env.SECRET_KEY,
      resave: true,
      saveUninitialized: true,
      cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
    }));
    app.use(passport.initialize());
    app.use(passport.session({
      store: new pgSession({
        pool,
        tableName: 'sessions'
      }),
      secret: process.env.SECRET_KEY,
      resave: true,
      saveUninitialized: true,
      cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
    }));
    app.use(flash());

    // *** app middleware *** //


    if (process.env.NODE_ENV == 'development') {
      app.use(morgan('dev'));
      morganBody(app);
    }

    app.use(express.static(path.join(__dirname, '..', '..', 'client')));

  };

})(module.exports);
