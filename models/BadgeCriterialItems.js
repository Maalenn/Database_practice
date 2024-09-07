const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const BadgeCriterialItems = sequelize.define("BadgeCriterialItems", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    criteriaId: {
        type: DataTypes.INTEGER,
        references: {
            model: "Criterias",
            key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    },
    badgeClassId: {
        type: DataTypes.INTEGER,
        references: {
            model: "BadgeClasses",
            key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    }
})

module.exports = BadgeCriterialItems;