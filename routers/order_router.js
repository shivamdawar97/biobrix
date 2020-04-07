const express = require('express')
const router = new express.Router()
const Order = require('../models/order')
const Product = require('../models/product')


router.post('/order/verify_cart',async (req,res)=>{
    try{
        const cartProducts =  req.body.products
        var total = 0

          for (const cartProduct of cartProducts)  {

            const product = await Product.findById(cartProduct.product_id)
            if(!product)
            throw new Error('Invalid product id')
            const allOk = 
            cartProduct.product_name === product.product_name &&
            cartProduct.image === product.images[0] &&
            cartProduct.price === product.price 

            if(!allOk)
            throw new Error('something went wrong')
            
            total+= (product.price * cartProduct.quantity)
        }
        res.send({products:cartProducts,total})

    }catch(error){
        res.status(400).send({error:error.message})
    }
})


router.post('/order/create_order',async (req,res)=>{
    try{
        const order = new Order({
            ...req.body,
            payment_status:false,
            order_status:'Created'
        })

        if(order.products.length==0)
        throw new Error('Product id array cannot be empty')

        var total = 0
        for(const element of order.products){
            const product = await Product.findOne({_id:element.id})
            if(!product)
            throw new Error('Invalid product id')
            total+=(product.price * element.quantity)
        }
        await order.save()
        res.status(201).send({
            ...order.toObject(),
            total
        })

    }catch(error){
        res.status(400).send({error:error.message})
    }
})

router.patch('/order/remove_item',async (req,res)=>{
    try{
        const productId = req.body.product_id
        const orderId = req.body.order_id
        if(!orderId)
        throw new Error('Please provide order id')
        const order = await Order.findById(orderId)
        if(!order)
        throw new Error('Invalid order id')
        order.products.pop(productId)
        res.send(order)

    }catch(error){
        res.status(400).send({error:error.message})
    }
})

router.patch('/order/place_order',async (req,res)=>{
    try{
        const orderId = req.body.order_id
        if(!orderId)
        throw new Error('Please provide order id')
        const order = await Order.findById(orderId)
        if(!order)
        throw new Error('Invalid order id')
        order.payment_status = true
        order.order_status = 'Placed'

        res.send(order)

    }catch(error){
        res.status(400).send({error:error.message})
    }
})

module.exports = router