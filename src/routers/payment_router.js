const express = require('express')
const Order = require('../models/order')
const router = new express.Router()
const instance = require('../payment/razorpay/razorpay') 
const auth = require('../middleware/auth')
const crypto = require('crypto')


router.post('/payment/initiate_payment/:id', async (req,res)=>{
    
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
            amount: order.total * 100,  // amount in the smallest currency unit
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

router.post('/payment/validate_signature', async (req,res)=>{
    try {
        const generated_signature = crypto.createHmac('sha256',process.env.RAZORPAY_KEY_SECRET)
        generated_signature.update(req.body.razorpay_order_id+"|"+ req.body.razorpay_payment_id)
        
        if ( generated_signature.digest('hex') === req.body.razorpay_signature){
            // Transactoin successfull
            const order = await Order.findById(req.body.order_id)
            if(!order) throw Error('No order found')

            order.payment_status = true
            order.order_status = 'placed'
            order.transaction_id = req.body.razorpay_payment_id

            await order.save()
            res.send(order)
        }
         else throw Error('Signature doesn\'t match')
  
    }  catch(error){
        res.status(400).send(error)
    }
})

router.post('/payment/refund/:paymentId',auth, async (req,res)=>{
    try{
        throw Error('Function not Implimented')
    }
    catch(error){
        res.status(400).send(error)
    }
})

module.exports = router