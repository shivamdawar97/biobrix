const path = require('path')
const express = require('express')
const app = express()
require('../db/mongoose')
const productRouter = require('../routers/product_router')
const categoryRouter = require('../routers/category_router')
const orderRouter = require('../routers/order_router')
const authRouter = require('../routers/auth_router')
const uploadRouter = require('../routers/file_upload')
const reviewRouter = require('../routers/review_router')
const homepageRouter = require('../routers/homepage_router')
const paytmRouter = require('../paytm/controller/paytm.router')


const angularPath = path.join(__dirname,'../build')


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });
  
app.use(express.static(angularPath))
app.use(express.json())
app.use(productRouter)
app.use(orderRouter)
app.use(authRouter)
app.use(categoryRouter)
app.use(uploadRouter)
app.use(reviewRouter)
app.use(homepageRouter)
app.use(paytmRouter)

module.exports = app