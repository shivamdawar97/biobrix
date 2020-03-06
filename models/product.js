const mongoose = require('mongoose')

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
    discount_percentage:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    in_stock:{
        type:Boolean
    }
})

const Product = mongoose.model('Product',productSchema)
module.exports=Product