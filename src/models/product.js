const mongoose = require('mongoose')
const review = require('./review')
const productSchema = new mongoose.Schema({
    product_name:{
        type: String,
        trim:true,
        required:true
    },
    description:{
        type: String,
        trim:true,
        required:true
    },
    images:[{
            type:String,
            required: true
    }],
    price:{
        type:Number,
        required:true
    },
    ingredients:[{
        type:String,
        required: true
    }],
    discount_percentage:{
        type:Number,
        required:true
    },
    reviews:[review],
    category:{
        type:String,
        required:true
    },
    in_stock:{
        type:Boolean,
        required:true,
        default:true
    },
    is_recent:{
        type:Boolean,
        required:true,
        default:false
    },
    tags: {
        type:[String],
        required:true
    }
})


productSchema.methods.getShortProduct = function(){

    const product = this
    const shortProduct = {
        product_id : product._id,
        product_name: product.product_name,
        price: product.price,
        image: product.images[0]
    }
    return shortProduct
}

productSchema.index({
    product_name:'text',
    tags:'text'
})

const Product = mongoose.model('Product',productSchema)
module.exports = Product