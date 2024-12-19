const { DataTypes } = require('sequelize');
const db = require("../database/mysql");

const User = db.define('users', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
    freezeTableName: true,
    timestamps: false
});

// console.log(User === db.models.User); // true

module.exports = User