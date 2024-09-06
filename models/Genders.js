const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Genders = sequelize.define("Genders", {
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
        msg: "Gender must be only character",
      },
      isIn: {
        arg: [["female", "male", "custom"]],
        msg: "There are three genders female, male, custom",
      },
    },
  },
});

module.exports = Genders;
