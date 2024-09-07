const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Achievements = sequelize.define("Achievements", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  badgeClassId: {
    type: DataTypes.INTEGER,
    references: {
      model: "BadgeClasses",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  achievementTypeId: {
    type: DataTypes.INTEGER,
    references: {
      model: "AchievementTypes",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  creditsAvailable: {
    type: DataTypes.FLOAT,
    validate: {
      isNumeric: {
        msg: "Credits Available must be number",
      },
    },
  },
  endorsementId: {
    type: DataTypes.INTEGER,
    references: {
      model: "EndorsementCredentials",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  endorsementJwt: {
    type: DataTypes.STRING,
  },
  resultDescriptionId: {
    type: DataTypes.INTEGER,
    references: {
      model: "ResultDescriptions",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  achievementCredentialId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Achievement_Credentials",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
});

module.exports = Achievements;
