const shortProductSchema = {
    _id:false,
    product_id : {
        type:String,
        required:true
    },
    product_name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
}
module.exports = shortProductSchema