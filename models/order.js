const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:true  
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
        required:true  
    },
    zip_code:{
        type:String,
        required:true  
    },
    city:{
        type:String,
        required:true  
    },
    state:{
        type:String,
        required:true  
    },
    phone_number:{
        type:String,
        required:true  
    },
    email:{
        type:String,
        required:true
    },
    payment_status:{
        type:Boolean,
        required:true
    },
    order_status:{
        type:String,
        required:true,
        enum:['Created','Placed','Dispatched','Delivered']
    }
})

const Order = mongoose.model('Order',orderSchema)
module.exports=Order