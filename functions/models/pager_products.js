const mongoose = require('mongoose')

const pagerProductsSchema = new mongoose.Schema({
    image_url:{
        type:String,
        required:true,
    },
    product_id:{
        type:String,
        required:true,
    }
})

const Category = mongoose.model('pager_products',pagerProductsSchema)
module.exports = Category