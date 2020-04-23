const Sequilize = require('sequilize')
const db = require('../config/config')

const penjualan = db.define('penjualan', {
    'id_penjualan': {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    'tanggal': Sequilize.STRING,
    'catatan': Sequilize.STRING,
    'status': Sequilize.BOOLEAN
    
}, {
    // prevent sequelize transform table name into plural
    freezeTableName: true,
    timestamp: false

})

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
    'nama_barang_terjual': Sequilize.STRING,
    'kuantitas_barang_terjual': Sequilize.INTEGER,
    'harga_barang_terjual': Sequilize.INTEGER

}, {
    // prevent sequelize transform table name into plural
    freezeTableName: true,
    timestamp: false

})

module.exports = penjualan
module.exports = barang_terjual