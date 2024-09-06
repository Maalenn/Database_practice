const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const AcademicBackgrounds = sequelize.isDefined("AcademicBackgrounds", {
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
  },
  fieldOfStudyId: {
    type: DataTypes.INTEGER,
    references: {
      model: "FieldOfStudys",
      key: "id",
    },
  },
  academicLevelId: {
    type: DataTypes.INTEGER,
    references: {
      model: "AcademicLevel",
      key: "id",
    },
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
  },
});

module.exports = AcademicBackgrounds;
