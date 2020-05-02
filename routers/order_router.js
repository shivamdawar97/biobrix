const express = require('express')
const router = new express.Router()
const Order = require('../models/order')
const Product = require('../models/product')

router.post('/order/verify_cart',async (req,res)=> {
    try{
        const cartProducts =  req.body.products
        if(cartProducts == undefined || cartProducts.length==0) throw Error('No products provided')
        var total = 0
        const orderProducts = []
          for (const cartProduct of cartProducts)  {

            const product = await Product.findById(cartProduct.product_id)
            if(!product)
            throw new Error('Invalid product id')
            const allOk = 
            cartProduct.product_name === product.product_name &&
            cartProduct.image === product.images[0] &&
            cartProduct.price === product.price 

            if(!allOk)
            throw new Error('cart verification failed')
            
            const pTotal = product.price * cartProduct.quantity
            total+= pTotal
            orderProducts.push({
                ...product.getShortProduct(),
                quantity: cartProduct.quantity,
                total:pTotal
            })
            
        }

        const order = new Order({
            products: orderProducts,
            total
        })
        
        await order.save()
        res.status(201).send(order)

    }catch(error){
        res.status(400).send({status:false,
            message:error.message,
            errorCode:'cart_verification_failed'})
    }
})

router.get('/order/get_details/:id',async (req,res)=>{
    const id = req.params.id
    try{
        const order = await Order.findById(id)
        
        if(!order)
        throw Error('No order found')

        if(order.order_status==='placed')
        {
            res.send(order)
            return
        }

        var total = 0
        const shortProducts = []
        for(const element of order.products){

            const product = await Product.findById(element.product_id)
            if(!product) throw new Error('Invalid product id')
            pTotal = product.price * element.quantity 
            total+=pTotal
            shortProducts.push({ 
                ...product.getShortProduct(),
                quantity:element.quantity,
                total: pTotal
                })       
        }
        //const user_info_completed = order.user_name !== 'null'
        order.products = shortProducts
        order.total = total
        await order.save()
        res.send(order)

    }catch(error){
        res.status(400).send({error:error.message})
    }
})

router.patch('/order/update_details/:id', async (req,res)=>{
    const updates= Object.keys(req.body)
    const allowedUpdates=['user_name','address','zip_code','city','state','phone_number','email']
    const isValidOperation = updates.every(update => allowedUpdates.includes(update)) 

    if(!isValidOperation){
        return res.status(400).send({error:'Invalid updates!'})
    }

    try{
        const order = await Order.findById(req.params.id)
        if(!order)
        return res.status(404).send()
        
        updates.forEach(update=> order[update]=req.body[update]) //update is the key not value
        await order.save()
        res.send(order)
    }catch(err){
        res.status(500).send(err.message)
    }
})

router.patch('/order/remove_item/:id',async (req,res)=>{
    try{
        const productId = req.body.product_id
        const orderId = req.params.id
        if(!orderId)
        throw new Error('Please provide order id')
        const order = await Order.findById(orderId)
        if(!order)
        throw new Error('Invalid order id')

        order.products = order.products.filter( product => {
            return product.id != productId
        })

        await order.save()
        res.send(order)

    }catch(error){
        res.status(400).send({error:error.message})
    }
})

router.patch('/order/place_order/:id',async (req,res)=>{
    try{
        const orderId = req.params.id
        const transactionId = req.body.transaction_id

        if(!orderId) throw new Error('Please provide order id')
        if(!transactionId) throw new Error('Please provide transaction id')

        const order = await Order.findById(orderId)
        if(!order)
        throw new Error('Invalid order id')

        order.payment_status = true
        order.order_status = 'placed'
        order.transaction_id = transactionId

        await order.save()

        res.send(order)

    }catch(error){
        res.status(400).send({error:error.message})
    }
})

router.delete('/order/:id',async (req,res)=>{
    try{
        
        const order = await Order.findOneAndDelete({_id:req.params.id})
        if(!order) res.status(404).send()
        res.send(order)

    }catch(e){
        res.status(500).send()
    }
})

router.get('/order/get_orders',async (req,res)=> {

    try {
        const phone_number = req.query.phone_number
        const orders = await Order.find({
            phone_number
        })
        if(!orders) res.status(404).send()
        res.send(orders)
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
    

})

module.exports = router