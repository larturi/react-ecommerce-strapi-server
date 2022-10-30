module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('MYSQL_PORT'),
        username: env('MYSQL_USER'),
        password: env('MYSQL_PASSWORD'),
        database: env('MYSQL_DATABASE'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
