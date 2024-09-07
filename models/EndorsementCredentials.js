const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EndorsementCredentials = sequelize.define('EndorsementCredentials', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  // Define other fields here
}, {
  tableName: 'EndorsementCredentials',
  timestamps: true,
});

module.exports = EndorsementCredentials;
