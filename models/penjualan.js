const Sequelize = require('sequelize')
const db = require('../config/config')

const penjualan = db.define('penjualan', {
    'id_penjualan': {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    'tanggal': Sequelize.STRING,
    'catatan': Sequelize.STRING,
    'status': Sequelize.BOOLEAN  
}, {
    // prevent sequelize transform table name into plural
    // freezeTableName: true,
    // timestamp: false

})

module.exports = penjualan
