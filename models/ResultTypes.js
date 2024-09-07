const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const ResultTypes = sequelize.define("ResultTypes", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "ResultTypes can be only character",
      },
    },
  },
});

module.exports = ResultTypes;
