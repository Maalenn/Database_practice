const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Institutions = sequelize.define("Institutions", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Additional fields as needed
});

module.exports = Institutions;
