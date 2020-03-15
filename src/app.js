const path = require('path')
const express = require('express')
const app = express()
require('../db/mongoose')
const productRouter = require('../routers/product_router')
const categoryRouter = require('../routers/category_router')
const orderRouter = require('../routers/order_router')
const authRouter = require('../routers/auth_router')

const angularPath = path.join(__dirname,'../build')

app.use(express.static(angularPath))
app.use(express.json())
app.use(productRouter)
app.use(orderRouter)
app.use(authRouter)
app.use(categoryRouter)

module.exports = app