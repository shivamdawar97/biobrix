const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        default: 'null'
    },
    products:[{
        _id:false,
        id:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            required:true
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
        enum:['created','placed','dispatched'],
        default:'created'
    },
    transaction_id:{
        type:String,
        required:true,
        default: 'null'
    }
})

const Order = mongoose.model('Order',orderSchema)
module.exports=Order