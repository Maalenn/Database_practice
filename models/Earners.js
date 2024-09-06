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
    references: {
      type: DataTypes.INTEGER,
      model: "Users",
      key: "id",
    },
  },
  achievementId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Achievements",
      key: "id",
    },
  },
});

module.exports = Earners;
