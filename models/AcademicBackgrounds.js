const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const AcademicBackgrounds = sequelize.define("AcademicBackgrounds", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
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
  fieldOfStudyId: {
    type: DataTypes.INTEGER,
    references: {
      model: "FieldOfStudies",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  academicLevelId: {
    type: DataTypes.INTEGER,
    references: {
      model: "AcademicLevels",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  academicYear: {
    type: DataTypes.DATE,
  },
  startDate: {
    type: DataTypes.DATE,
  },
  endDate: {
    type: DataTypes.DATE,
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
});

module.exports = AcademicBackgrounds;
