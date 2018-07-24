// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://kin:psql@localhost/Logos',
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://kin:psql@localhost/Logos',
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    }
  }
}