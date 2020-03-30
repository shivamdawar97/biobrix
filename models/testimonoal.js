const mongoose = require('mongoose')

const testimonySchema = new mongoose.Schema({
    customer_name : {
        type: String,
        trim:true,
        required:true
    },
    image:{
        type:String,
        required: true
    },
    testimony:{
        type:String,
        required: true
    }

})

const Testimony = mongoose.model('Testimony',testimonySchema)
module.exports = Testimony
