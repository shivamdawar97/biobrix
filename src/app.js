const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require('./db/mongoose')
const productRouter = require('./routers/product_router')
const categoryRouter = require('./routers/category_router')
const orderRouter = require('./routers/order_router')
const paymentRouter = require('./routers/payment_router')
const authRouter = require('./routers/auth_router')
const uploadRouter = require('./routers/file_upload')
const reviewRouter = require('./routers/review_router')
const homepageRouter = require('./routers/homepage_router')
const paytmRoutes = require('./payment/controller').router
const angularPath = path.join(__dirname,'../frontend/bioc/build')


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

app.use(express.static(angularPath))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(productRouter)
app.use(orderRouter)
app.use(paymentRouter)
app.use(authRouter)
app.use(categoryRouter)
app.use(uploadRouter)
app.use(reviewRouter)
app.use(homepageRouter)
app.use('/paytm',paytmRoutes)
app.use('*',express.static(angularPath))

module.exports = app