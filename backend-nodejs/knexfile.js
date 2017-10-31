const databaseName = 'passport_local_knex';
const Pool = require('pg-pool');
const url = require('url');

// *** load environment variables *** //
require('dotenv').config();

var pg = require('pg');
<<<<<<< HEAD
pg.defaults.ssl = true;
=======
pg.defaults.ssl = process.env.NODE_ENV != "development";
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1

module.exports = {
  development: {
    client: 'postgresql',
    connection: `postgres://localhost:5432/${databaseName}`,
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      //directory: __dirname + 'backend-nodejs/src/server/db/migrations'
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    },
    // pool: (() => {
    //   console.log(process.env)
    //   var params = url.parse(process.env.DATABASE_URL);
    //   var auth = params.auth.split(':');
    //   var pconfig = {
    //     user: auth[0],
    //     password: auth[1],
    //     host: params.hostname,
    //     port: params.port,
    //     database: params.pathname.split('/')[1],
    //     ssl: true
    //   };
    //
    //   var pool = new Pool(pconfig);
    // })()
  },
  test: {
    client: 'postgresql',
    connection: `postgres://localhost:5432/${databaseName}_test`,
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  }
};
