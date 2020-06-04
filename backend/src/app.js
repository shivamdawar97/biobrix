const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require('./db/mongoose')
const productRouter = require('./routers/product_router')
const categoryRouter = require('./routers/category_router')
const orderRouter = require('./routers/order_router')
const authRouter = require('./routers/auth_router')
const uploadRouter = require('./routers/file_upload')
const reviewRouter = require('./routers/review_router')
const homepageRouter = require('./routers/homepage_router')
const paytmRoutes = require('./paytm/controller').router


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))  

// app.use(express.json())

app.use('/images/product-images',express.static('images/product-images'))
app.use(productRouter)
app.use(orderRouter)
app.use(authRouter)
app.use(categoryRouter)
app.use(uploadRouter)
app.use(reviewRouter)
app.use(homepageRouter)
app.use('/paytm',paytmRoutes)

/*
const path = require('path')
const angularPath = path.join(__dirname,'../build')
app.use(express.static(angularPath))
app.use('*',express.static(angularPath))
*/

module.exports = app