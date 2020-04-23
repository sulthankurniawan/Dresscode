const express = require('express')
const Penjualan = require('../models/penjualan')
const router = express.Router()
// const excelConfig = require('../middleware/excel')
// const {fileDir, upload}  = require('../middleware/uploadRecruitment')
// const uploadFile = require('../middleware/uploadFile')
const request = require('request')
const pool = require('../conn')

const excel = require('excel4node')
const workbook = new excel.Workbook()

const header = workbook.createStyle({
    font: {
      color: 'white',
      size: 14,
      align: 'center',
      bold: true
    },
    fill: {
        type: 'pattern',
        patternType: 'solid',
        bgColor: 'black',
        fgColor: 'black'
    },
    alignment: {
        horizontal: 'center'
    }
    // numberFormat: '$#,##0.00; ($#,##0.00); -',
  });
const column = workbook.createStyle({
    font: {
      color: 'black',
      size: 12,
    }
    // numberFormat: '$#,##0.00; ($#,##0.00); -',
  });

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
}



