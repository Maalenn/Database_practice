const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const RubricCriterionLevels = sequelize.define("RubricCriterionLevels", {
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
        msg: "Rubric Criterion Levels name must be only character",
      },
    },
  },
  description: {
    type: DataTypes.STRING,
    validate: {
      len: {
        arg: [0, 800],
        msg: "Your description must be between 0 to 800 character",
      },
    },
  },
  level: {
    type: DataTypes.STRING,
  },
  points: {
    type: DataTypes.INTEGER
  },
  

});

module.exports = RubricCriterionLevels;