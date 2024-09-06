const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Specializations = sequelize.define("Specializations", {
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
        msg: "Specializations name must be only character",
      }
    },
  },
  description: {
    dataType: DataTypes.STRING,
    validate: {
      len: {
        arg: [20, 800],
        msg: "Your description must be between 20 to 500 character",
      },
    },
  },
  fieldOfStudyId: {
    type: DataTypes.INTEGER,
    references: {
      model: "FieldOfStudys",
      key: "id",
    },
  },
});

module.exports = Specializations;