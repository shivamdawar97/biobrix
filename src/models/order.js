const mongoose = require('mongoose')
const shortProduct = require('./product_short')

const orderSchema = new mongoose.Schema({
    payment_id:{
        type: String,
        required: true,
        default: 'NA'
    },
    user_name:{
        type:String,
        required:true,
        default: 'NA'
    },
    products:[{
        ...shortProduct,
        quantity:{
            type:Number
        },
        total:{
            type:Number
        }
    }],
    address:{
        type:String,
        required:true,
        default: 'NA'
    },
    zip_code:{
        type:String,
        required:true,
        default: 'NA'
    },
    city:{
        type:String,
        required:true,
        default: 'NA'
    },
    state:{
        type:String,
        required:true,
        default: 'NA'
    },
    phone_number:{
        type:String,
        required:true,
        default: 'NA'
    },
    email:{
        type:String,
        required:true,
        default: 'NA'
    },
    payment_status:{
        type:Boolean,
        required:true,
        default: false
    },
    order_status:{
        type:String,
        required:true,
        enum:['created','placed','dispatched','delivered','canceled'],
        default:'created'
    },
    transaction_id:{
        type:String,
        required:true,
        default: 'NA'
    },
    total: {
        type: Number,
        required:true
    }
}, {
    timestamps: true
})

const Order = mongoose.model('Order',orderSchema)
module.exports=Order