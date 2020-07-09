const express = require('express')
const router = new express.Router()
const instance = require('../payment/razorpay/razorpay') 

router.post('/payment_order', async (req,res)=> {

    try {

        const options = {
            amount: req.body.amount,  // amount in the smallest currency unit
            currency: "INR",
            payment_capture: '0',
            receipt: "order_rcptid_11",
        }
         instance.orders.create(options, (err,order)=>{
            if(err) throw Error('Order creation failed') 
            res.send(order)   

        })
    

    }catch(error) {
        res.status(400).send(error)
    }

})

module.exports = router