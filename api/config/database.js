module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'store'),
      user: env('DATABASE_USERNAME', 'ratul'),
      password: env('DATABASE_PASSWORD', 'ratul7709'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
