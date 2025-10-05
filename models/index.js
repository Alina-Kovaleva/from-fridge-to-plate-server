"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  const connectionUrl = process.env[config.use_env_variable];
  if (!connectionUrl) {
    throw new Error(
      `Expected environment variable ${config.use_env_variable} to be set`
    );
  }
  const connectionOptions = { ...config };
  delete connectionOptions.use_env_variable;
  delete connectionOptions.url;
  sequelize = new Sequelize(connectionUrl, connectionOptions);
} else if (config.url) {
  const connectionOptions = { ...config };
  delete connectionOptions.use_env_variable;
  delete connectionOptions.url;
  sequelize = new Sequelize(config.url, connectionOptions);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
