const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Roles = sequelize.define("Roles", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "Roles can be only character",
      },
      isIn: {
        args: [["admin", "issuer", "earner", "institutionOwner"]],
        msg: "There are only 4 roles admin, issuer, earner, institutionOwner",
      },
    },
  },
});

module.exports = Roles;
