const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const ResultDescriptions = sequelize.define("ResultDescriptions", {
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
        msg: "Result Descriptions name must be only character",
      },
    },
  },
  alignmentId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Alignments",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  allowedValue: {
    type: DataTypes.STRING,
  },
  requiredLevel: {
    type: DataTypes.INTEGER
  },
  requiredValue: {
    type: DataTypes.STRING,
  },
  resultTypeId: {
    type: DataTypes.INTEGER,
    references: {
      model: "ResultTypes",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  rubricCriterionLevelId: {
    type: DataTypes.INTEGER,
    references: {
      model: "RubricCriterionLevels",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  valueMax: {
    type: DataTypes.STRING,
  },
  valueMin: {
    type: DataTypes.STRING,
  }

});

module.exports = ResultDescriptions;
