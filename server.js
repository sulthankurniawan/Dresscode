require('dotenv').config()

const express = require('express')
const ejs = require('ejs')
const cors = require('cors')
const app = express()
const port = process.env.port
// const authMid = require()
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// post body handler
const bodyParser = require('body-parser')

app.use(cors(corsOptions))

// set body parser for HTTP post operation
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true})) // support encoded bodies

// set up template engine
app.set('view engine', ejs)

// static directories
app.use(express.static('/assets'))

// app.use(authMid)

// fire routes
const penjualan = require('./routes/penjualan')
app.use(penjualan)


// test server
app.get('/', (req, res) => {
    res.send('Hello World')
})

// listen to port
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})