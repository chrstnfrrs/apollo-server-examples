const config = {
  development: {
    client: 'pg',
    connection: {
      database: 'auth',
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    }
  },
};

export default config
