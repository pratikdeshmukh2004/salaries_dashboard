// Update with your config settings.
require("dotenv").config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  developement: {
    client: process.env.DBCLIENT,
    connection: {
      database: process.env.DBNAME,
      user: process.env.DBUSER,
      password: process.env.DBPASS,
      host: process.env.DBHOST,
      port: process.env.DBPORT
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: process.env.DBCLIENT,
    connection: {
      database: process.env.DBNAME,
      user: process.env.DBUSER,
      password: process.env.DBPASS,
      host: process.env.DBHOST,
      port: process.env.DBPORT
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
