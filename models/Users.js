const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please provide your first name",
        },
        isAlpha: {
          msg: "First name must be characters",
        },
        len: {
          arg: [5, 40],
          msg: "Your name must be between 5 to 40 character",
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please provide your last name",
        },
        isAlpha: {
          msg: "Last name must be characters",
        },
        len: {
          arg: [5, 40],
          msg: "Your name must be between 5 to 40 character",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please provide your email",
        },
        isEmail: {
          msg: "Email is invalid",
        },
      },
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isInt: {
          msg: "Phone Number must be a valid integer",
        },
        len: {
          arg: [9, 10],
          msg: "Phone Number must be between 10 and 15 digits long",
        },
      },
    },
    profileImage: {
      type: DataTypes.STRING,
    },
    genderId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Genders",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    nationality: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
    },
    bio: {
      type: DataTypes.STRING,
      validate: {
        len: {
          arg: [20, 800],
          msg: "Your bio must be between 20 to 500 character",
        },
      },
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Roles",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["email"],
      },
    ],
  }
);

module.exports = User;
