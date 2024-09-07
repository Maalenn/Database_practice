const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Alignments = sequelize.define('Alignments', {
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

  module.exports = Alignments;