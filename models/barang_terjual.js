const Sequelize = require('sequelize')
const db = require('../config/config')

const barang_terjual = db.define('barang_terjual',{
    'id_barang_terjual': {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    'id_penjualan': {
        type: Sequelize.INTEGER,
        foreignKey: true,
        autoIncrement: true
    },
    'nama_barang_terjual': Sequelize.STRING,
    'kuantitas_barang_terjual': Sequelize.INTEGER,
    'harga_barang_terjual': Sequelize.INTEGER

}, {
    // prevent sequelize transform table name into plural
    freezeTableName: true,
    timestamp: false

})

module.exports = barang_terjual