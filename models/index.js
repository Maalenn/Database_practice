const Users = require("./Users");
const Roles = require("./Roles");
const Genders = require("./Genders");
const Earners = require("./Earners");
const AcademicBackgrounds = require("./AcademicBackgrounds");
const AcademicLevels = require("./AcademicLevels");
const Specializations = require("./Specializations");
const FieldOfStudies = require("./FieldOfStudies");
const Courses = require("./Courses");
const BadgeClasses = require("./BadgeClasses");
const AchievementTypes = require("./AchievementTypes");
const Achievements = require("./Achievements");
const Addresses = require("./Addresses");
const BadgeCriterialItems = require("./BadgeCriterialItems");
const Criterias = require("./Criterias");
const ResultDescriptions = require("./ResultDescriptions");
const ResultTypes = require("./ResultTypes");
const RubricCriterionLevels = require("./RubricCriterionLevels");
const Alignments = require("./Aligments");
const Institutions = require("./Institutions");
const EndorsementCredentials = require("./EndorsementCredentials");
const AchievementCredentials = require("./AchievementCredentials");

Users.hasMany(Addresses, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Addresses.belongsTo(Users, {
  foreignKey: "userId",
});

// Users & Roles
Roles.hasOne(Users, {
  foreignKey: "roleId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Users.belongsTo(Roles, {
  foreignKey: "roleId",
});

// User & Gender
Genders.hasMany(Users, {
  foreignKey: "genderId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Users.belongsTo(Genders, {
  foreignKey: "genderId",
});

// User & Earner
Users.hasMany(Earners, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Earners.belongsTo(Users, {
  foreignKey: "userId",
});

Achievements.hasMany(Earners, {
  foreignKey: "achievementId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Earners.belongsTo(Achievements, {
  foreignKey: "achievementId",
});

AcademicBackgrounds.hasMany(Earners, {
  foreignKey: "academicBackgroundId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Earners.belongsTo(AcademicBackgrounds, {
  foreignKey: "academicBackgroundId",
});

// User & AcademicBackgrounds
Users.hasMany(AcademicBackgrounds, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
AcademicBackgrounds.belongsTo(Users, {
  foreignKey: "userId",
});

// FieldOfStudys & AcademicBackgrounds
FieldOfStudies.hasMany(AcademicBackgrounds, {
  foreignKey: "fieldOfStudyId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

AcademicBackgrounds.belongsTo(FieldOfStudies, {
  foreignKey: "fieldOfStudyId",
});

// AcademicLevel & AcademicBackgrounds
AcademicLevels.hasOne(AcademicBackgrounds, {
  foreignKey: "academicLevelId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

AcademicBackgrounds.belongsTo(AcademicLevels, {
  foreignKey: "academicLevelId",
});

// Institutions & AcademicBackgrounds
Institutions.hasMany(AcademicBackgrounds, {
  foreignKey: "institutionId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

AcademicBackgrounds.belongsTo(Institutions, {
  foreignKey: "institutionId",
});

// FieldOfStudies & Specializations
FieldOfStudies.hasMany(Specializations, {
  foreignKey: "fieldOfStudyId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Specializations.belongsTo(FieldOfStudies, {
  foreignKey: "fieldOfStudyId",
});

// FieldOfStudies & Course
FieldOfStudies.hasMany(Courses, {
  foreignKey: "fieldOfStudyId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Courses.belongsTo(FieldOfStudies, {
  foreignKey: "fieldOfStudyId",
});

// Specializations & Courses
Specializations.hasMany(Courses, {
  foreignKey: "specializationId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Courses.belongsTo(Specializations, {
  foreignKey: "specializationId",
});

// BadgeClass & Achievements
BadgeClasses.hasMany(Achievements, {
  foreignKey: "badgesClassId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Achievements.belongsTo(BadgeClasses, {
  foreignKey: "badgeClassId",
});

// AchievementTypes & Achievements
AchievementTypes.hasMany(Achievements, {
  foreignKey: "achievementTypeId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

ResultDescriptions.hasMany(Achievements, {
  foreignKey: "resultDescriptionId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Achievements.belongsTo(ResultDescriptions, {
  foreignKey: "resultDescriptionId",
});

Achievements.belongsTo(AchievementTypes, {
  foreignKey: "achievementTypeId",
});

// Achievements & BadgeCriterialItems
Achievements.hasMany(BadgeCriterialItems, {
  foreignKey: "achievementId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

BadgeCriterialItems.belongsTo(Achievements, {
  foreignKey: "achievementId",
});

// Criterias & BadgeCriterialItems
Criterias.hasMany(BadgeCriterialItems, {
  foreignKey: "criteriasId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

BadgeCriterialItems.belongsTo(Criterias, {
  foreignKey: "criteriasId",
});

Alignments.hasMany(ResultDescriptions, {
  foreignKey: "alignmentId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

ResultDescriptions.belongsTo(Alignments, {
  foreignKey: "alignmentId",
});

ResultTypes.hasMany(ResultDescriptions, {
  foreignKey: "resultTypeId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

ResultDescriptions.belongsTo(ResultTypes, {
  foreignKey: "resultTypeId",
});

RubricCriterionLevels.hasMany(ResultDescriptions, {
  foreignKey: "rubricCriterionLevelId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

ResultDescriptions.belongsTo(RubricCriterionLevels, {
  foreignKey: "rubricCriterionLevelId",
});

Alignments.hasMany(RubricCriterionLevels, {
  foreignKey: "alignmentId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

RubricCriterionLevels.belongsTo(Alignments, {
  foreignKey: "alignmentId",
});

module.exports = {
  Users,
  Roles,
  Genders,
  Earners,
  AcademicBackgrounds,
  AchievementTypes,
  AcademicLevels,
  Specializations,
  FieldOfStudies,
  Courses,
  BadgeClasses,
  AchievementTypes,
  Achievements,
  Addresses,
  BadgeCriterialItems,
  Criterias,
  ResultDescriptions,
  ResultTypes,
  RubricCriterionLevels,
  Alignments,
  Institutions,
  EndorsementCredentials,
  AchievementCredentials
};
