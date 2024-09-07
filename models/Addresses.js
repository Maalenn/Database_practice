const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Addresses = sequelize.define("Addresses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  addressCountryCode: {
    type: DataTypes.STRING,
  },
  streetAddress: {
    type: DataTypes.STRING,
  },
  postalCode: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
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
  institutionId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Institutions",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
});

module.exports = Addresses;
