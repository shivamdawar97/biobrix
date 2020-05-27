const mongoose = require('mongoose')
const shortProduct = require('./product_short')

const orderSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        default: 'null'
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
        default: 'null'
    },
    zip_code:{
        type:String,
        required:true,
        default: 'null'
    },
    city:{
        type:String,
        required:true,
        default: 'null'
    },
    state:{
        type:String,
        required:true,
        default: 'null'
    },
    phone_number:{
        type:String,
        required:true,
        default: 'null'
    },
    email:{
        type:String,
        required:true,
        default: 'null'
    },
    payment_status:{
        type:Boolean,
        required:true,
        default: false
    },
    order_status:{
        type:String,
        required:true,
        enum:['created','placed','dispatched','delivered'],
        default:'created'
    },
    transaction_id:{
        type:String,
        required:true,
        default: 'null'
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