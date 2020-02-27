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
        const products = await Product.find({})
    
        if(!products || products.length==0)
            throw Error('No product found')
        res.send(products)    

    }catch(error){
        res.status(400).send({error: error.message})
    }
})

module.exports = router