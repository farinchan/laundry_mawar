const { DataTypes } = require('sequelize');
const db = require("../database/mysql");

const Laundry = db.define('laundry', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    pelayanan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    berat: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    harga: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    // Other model options go here
    freezeTableName: true,
    timestamps: false
});

// console.log(User === db.models.User); // true

module.exports = Laundry
