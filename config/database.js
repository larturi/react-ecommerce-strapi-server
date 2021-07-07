module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'ecommerce-games-next'),
        username: env('DATABASE_USERNAME', 'ecommercegames'),
        password: env('DATABASE_PASSWORD', 'ye]aBuZYYf)4-*&'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
