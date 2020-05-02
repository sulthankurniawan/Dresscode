const express = require('express')
const Penjualan = require('../models/penjualan')
const Terjual = require('../models/barang_terjual')
const router = express.Router()
const request = require('request')

router.get("/test", (req, res) => {
  res.render("CMS/sidebar")
})

router.get("/penjualan", (req, res) => {
  Penjualan.findAll().then(_penjualan => {
    // res.json({data : penjualan})
    Terjual.findAll().then(_terjual => {
      res.render('CMS/lihat-penjualan', JSON.stringify({data: _penjualan, data1: _terjual}))
    })
    // res.render('CMS/lihat-penjualan', {data: _penjualan})
    
  })
})

router.get("/penjualan/:id_penjualan", (req, res) => {
  Penjualan.findOne({
    where: {id_penjualan : req.params.id_penjualan}
  }).then(division => {
    if (!division) {
      return res.json({"msg" : "data not found"})
    }
    res.json({data : id-penjualan})
  })
})

router.get("/tambah-penjualan", (req, res) => {
  res.render("CMS/input-penjualan")
})

router.post("/tambah-penjualan", (req, res) => {
  Penjualan.create({
    tanggal : req.body.tanggal,
    nama_barang : req.body.nama_barang,
    kuantitas_barang : req.body.kuantitas_barang
  }).then(penjualan => {
    res.json({data : penjualan})
  })
})

router.put("/tambah-penjualan/:id_penjualan", (req, res) => {
  request(req.protocol + "://" + req.headers.host + "/penjualan/" + req.params.id_penjualan, {json: true}, (err, res2, body) => {
    if (body.data == undefined) {
      res.json({msg : "data not found"})
    } else {
        Penjualan.update({
            type : req.body.type,
            value : req.body.value
        }, {
            where : { id_penjualan: req.params.id_penjualan },
            returning : true,
            plain : true
        }).then(affectedRow => {
            return Penjualan.findOne({where: {id_penjualan: req.params.id_penjualan}})      
        }).then(b => {
            res.json({
                "status" : "success",
                "message" : "data updated",
                "data" : b
            })
        })
    }
  })
})

router.delete("/tambah-penjualan/:id_penjualan", (req, res) => {
  request(req.protocol + "://" + req.headers.host + "/penjualan/" + req.params.id_social, { json: true}, (err, res2, body) => {
    if (body.data == undefined) {
      res.json({msg : "data not found"})
    }
    else {
      Penjualan.destroy({where: {id_penjualan: req.params.id_penjualan}}).then(division => {
        res.json({msg : "data deleted"})
      })
    }
  })
})

module.exports = router

