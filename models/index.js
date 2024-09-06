const Users = require("./Users");
const Roles = require("./Roles");
const Genders = require("./Genders");
const Earners = require("./Earners");
const AcademicBackgrounds = require("./AcademicBackground");
const AcademicLevel = require("./AcademicLevel");
const Specializations = require("./Specializations");
const FieldOfStudies = require("./FieldOfStudies");
// Users & Roles
Roles.hasOne("Users", {
  foreignKey: "roleId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Users.belongsTo("Roles", {
  foreignKey: "roleId",
});

// User & Gender
Genders.hasOne("Users", {
  foreignKey: "genderId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Users.belongsTo("Genders", {
  foreignKey: "genderId",
});

// User & Earner
Users.hasMany("Earners", {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Earners.belongsTo("Users", {
  foreignKey: "userId",
});

// User & AcademicBackgrounds
Users.hasMany("AcademicBackgrounds", {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
AcademicBackgrounds.belongsTo("Users", {
  foreignKey: "userId",
});

// FieldOfStudys & AcademicBackgrounds
FieldOfStudies.hasMany("AcademicBackgrounds", {
  foreignKey: "fieldOfStudyId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

AcademicBackgrounds.belongsTo("FieldOfStudies", {
  foreignKey: "fieldOfStudyId",
});

// AcademicLevel & AcademicBackgrounds
AcademicLevel.hasOne("AcademicBackgrounds", {
  foreignKey: "academicLevelId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

AcademicBackgrounds.belongsTo("AcademicLevel", {
  foreignKey: "academicLevelId",
});

// Institutions & AcademicBackgrounds
Institutions.hasMany("AcademicBackgrounds", {
  foreignKey: "institutionId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

AcademicBackgrounds.belongsTo("Institutions", {
  foreignKey: "institutionId",
});

// FieldOfStudies & Specializations
FieldOfStudies.hasMany("Specializations", {
  foreignKey: "fieldOfStudyId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Specializations.belongsTo("FieldOfStudies", {
  foreignKey: "fieldOfStudyId",
});

module.exports = {
  Users,
  Roles,
  Genders,
  Earners,
  AcademicBackgrounds,
  AcademicLevel,
  Specializations,
  FieldOfStudies,
};
