const review = {
   product_id : {
        type:String,
        required:true
   },
   rating:{
       type: Number,
       required:true
   },
   reviewer_name:{
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