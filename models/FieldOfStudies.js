const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const FieldOfStudies = sequelize.define("FieldOfStudies", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "FieldOfStudies name must be only character",
      }
    },
  },
  description: {
    type: DataTypes.STRING,
    validate: {
      len: {
        arg: [20, 800],
        msg: "Your description must be between 20 to 500 character",
      },
    },
  },
});

module.exports = FieldOfStudies;