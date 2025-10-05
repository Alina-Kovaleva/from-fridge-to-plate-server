require("dotenv").config();

const PGSSLMODE = (process.env.PGSSLMODE || process.env.PG_SSL_MODE || "require").toLowerCase();
const sslDisabled = ["disable", "off", "false"].includes(PGSSLMODE);
const verifyFull = ["verify-full", "verifyfull", "strict"].includes(PGSSLMODE);

const baseConfig = {
  dialect: "postgres",
  logging: false,
  pool: {
    max: Number(process.env.DB_POOL_MAX || 5),
    min: Number(process.env.DB_POOL_MIN || 0),
    acquire: Number(process.env.DB_POOL_ACQUIRE || 10000),
    idle: Number(process.env.DB_POOL_IDLE || 10000)
  }
};

const sslDialectOptions = sslDisabled
  ? undefined
  : {
      ssl: {
        require: true,
        rejectUnauthorized: verifyFull
      }
    };

const testUsesUrl = Boolean(process.env.TEST_DATABASE_URL);

const testConfig = testUsesUrl
  ? { use_env_variable: "TEST_DATABASE_URL" }
  : {
      database: process.env.TEST_DATABASE_NAME || "database_test",
      username: process.env.TEST_DATABASE_USERNAME || "postgres",
      password: process.env.TEST_DATABASE_PASSWORD || null,
      host: process.env.TEST_DATABASE_HOST || "127.0.0.1"
    };

module.exports = {
  development: {
    ...baseConfig,
    use_env_variable: "DATABASE_URL",
    dialectOptions: sslDialectOptions
  },
  test: {
    ...baseConfig,
    ...testConfig,
    dialectOptions: sslDialectOptions
  },
  production: {
    ...baseConfig,
    use_env_variable: "DATABASE_URL",
    dialectOptions:
      sslDialectOptions || {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
  }
};
