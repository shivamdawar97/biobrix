const path = require('path')
const express = require('express')
const app = express()
require('../db/mongoose')
const productRouter = require('../routers/product_router')

const angularPath = path.join(__dirname,'../fontend/bioc/src')

app.use(express.static(angularPath))
app.use(express.json())
app.use(productRouter)

module.exports = app