const express= require('express')
const router=new express.Router()
const auth = require('../middleware/auth')
const Product = require('../models/product')

router.post('/product/add_product',async (req,res)=>{
    try{
        const product = new Product(req.body)

        if(product.images.length==0)
        throw new Error('Images array cannot be empty')

        await product.save()
        res.status(201).send(product)

    }catch(error){
        res.status(400).send({error: error.message})
    }
})

router.get('/product/product_list',async (req,res)=>{

    try{
        const category = req.query.category
        const products = await Product.find(category==undefined?{}:{category})
        var responseArray = []
        products.forEach(product=>{

            const object = product.toObject()    
            
            object.image =  product.images[0]
            
            delete object.category
            delete object.description
            delete object.in_stock
            delete object.__v
            delete object.images
        
            responseArray = responseArray.concat(object)
        })

        if(!products || products.length==0)
            throw Error('No product found')
        res.send(responseArray)    

    }catch(error){
        res.status(400).send({error: error.message})
    }
})

router.get('/product/product_detail',async (req,res)=>{
    try{
        const productId = req.query.product_id
        const product = await Product.findOne({_id:productId})
        if(!product)
        throw Error('No product found')
        res.send(product)
        
    }catch(error){
            res.status(400).send({error:error.message})
    }

})

module.exports = router