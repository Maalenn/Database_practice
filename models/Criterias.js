const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Criterias = sequelize.define("Criterias", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  narrative: {
    type: DataTypes.STRING,
  },
});

module.exports = Criterias;
