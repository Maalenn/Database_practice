const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Earners = sequelize.define("Earner", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Users",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  achievementId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Achievements",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
});

module.exports = Earners;
