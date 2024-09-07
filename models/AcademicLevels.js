const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const AcademicLevels = sequelize.define("AcademicLevels", {
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
        msg: "Academic_level name must be only character",
      }
    },
  },
});

module.exports = AcademicLevels;