const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AchievementCredentials = sequelize.define('AchievementCredentials', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  // Define other fields here
}, {
  tableName: 'Achievement_Credentials',
  timestamps: true,
});

module.exports = AchievementCredentials;
