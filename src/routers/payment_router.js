const express = require('express')
const Order = require('../models/order')
const router = new express.Router()
const instance = require('../payment/razorpay/razorpay') 
const { ObjectID } = require('mongodb')

router.post('/initiate_payment/:id', async (req,res)=>{
    
    const updates= Object.keys(req.body)
    const allowedUpdates=['user_name','address','zip_code','city','state','phone_number','email']
    const isValidOperation = updates.every(update => allowedUpdates.includes(update)) 

    if(!isValidOperation){
        return res.status(400).send({error:'Invalid updates!'})
    }
    try{
        const order = await Order.findById(req.params.id)
        if(!order)
        throw Error('order not fond')
        
        const options = {
            amount: order.total,  // amount in the smallest currency unit
            currency: "INR",
            payment_capture: '0',
            receipt: "rcptid_11",
        }
        const rOrder = await instance.orders.create(options)
        updates.forEach(update => order[update]=req.body[update]) //update is the key not value
        order.payment_id = rOrder.id
        await order.save()
        res.send(order)
    }catch(err){
        console.log(err)
        res.status(400).send(err.message)
    }
})
module.exports = router