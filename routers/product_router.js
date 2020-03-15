const express= require('express')
const router=new express.Router()
const Product = require('../models/product')
const Category = require('../models/category')


router.post('/product/add_product',async (req,res)=>{
    try{
        const product = new Product(req.body)

        if(product.images.length==0)
        throw new Error('Images array cannot be empty')

        await product.save()

        const shortProduct = {
            product_id: product._id,
            product_name: product.product_name,
            price: product.price,
            image: product.images[0]
        }
      
        const category = await Category.findOne({
            category_name: product.category
        })
        if(!category) {
            const newCategory = new Category({
                category_name: product.category,
                product_list : [shortProduct]
            })    
            await newCategory.save()
        }
        else {
            category.product_list.push(shortProduct)
            await category.save()
        }

        res.status(201).send(product)

    }catch(error){
        res.status(400).send({error: error.message})
    }
})

router.get('/product/product_list',async (req,res)=>{

    try{
        const id = req.query.categoryId
        
        const categoryWiseProdcts = id==undefined? await Category.find({}) : await Category.findById(id)
        
        if(!categoryWiseProdcts || categoryWiseProdcts.length==0)
            throw Error('No product found')
        res.send(categoryWiseProdcts)    

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

router.delete('/product/delete_product',async (req,res)=>{
    try{
        const product = await Product.findById(req.query.id)
        if(!product) throw new Error('No product found to delete')
        const category = await Category.findOne({
            category_name: product.category
        })
        if(!category) throw new Error('No product found to delete')
      
        category.product_list.pop({
            product_id:product._id
        })
        if(category.product_list.length == 0)
        await category.delete()
        else await category.save()
        await product.delete()
        res.send({
            message: `Product with id ${req.query.id} deleted`
        })
    }
    catch(error){
        res.status(400).send(error.message)
    }
})

router.get('/product/home_products',async (req,res)=>{
        try{
            const homeProducts = []
            const categoryWiseProdcts = await Category.find({})
            categoryWiseProdcts.forEach(category=>{
                    homeProducts.push(category.product_list[0])
                   // if(category.product_list[1]!=null) homeProducts.push(category.product_list[1])
            })
            res.send(homeProducts)
        }catch(error){
            res.status(400).send(error.message)
        }
})

module.exports = router