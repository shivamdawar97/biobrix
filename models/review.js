const review = {
    product_id : {
        type:String,
        required:true
    },
   raing:{
       type: Number,
       required:true
   },
   reviwer_name:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   review:{
    type:String,
    required:true
   },
   date:{
    type:String,
    required:true
   }
}

module.exports = review;