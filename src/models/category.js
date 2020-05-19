const mongoose = require('mongoose')
const shortProduct = require('./product_short')

const categorySchema = new mongoose.Schema({
    category_name:{
        type:String,
        required:true,
        unique:true
    },
    product_list:[shortProduct]
})

const Category = mongoose.model('category',categorySchema)
module.exports = Category