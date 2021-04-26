const config = {
  default: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD || 'clave123',
    dialect: process.env.DB_DIALECT || 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || '127.0.0.1',
    port = process.env.PORT || '3000'
  },
  development: {
    database: process.env.DB_NAME || 'server',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD || 'clave123',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'postgres',
    port = process.env.PORT || '3000'
  },
  test: {
    extend: 'default',
    database: 'iic2513template_test',
  },
  production: {
    use_env_variable: "DATABASE_URL",
    port = process.env.PORT || '3000',
    dialect: 'postgres',
    dialectOptions: {
      ssl: true,
    },
  },
};
  
  Object.keys(config).forEach((configKey) => {
    const configValue = config[configKey];
    if (configValue.extend) {
      config[configKey] = { ...config[configValue.extend], ...configValue };
    }
  });
  
  module.exports = config;
