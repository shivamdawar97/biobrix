const express= require('express')
const router=new express.Router()
const Product = require('../models/product')
const Category = require('../models/category')
const auth = require('../middleware/auth')
const upload = require('../config/multer_config').upload3

router.post('/product/add_product',auth,upload.single('image'),async (req,res)=>{
     
    try{
        
        const data = JSON.parse(req.body.data)
        const filepath = req.file.path
        if(!filepath) throw Error('File path is undefined')
        const url =  `${req.protocol}://${req.get('host')}/${filepath}` 
        const product = new Product({
            ...data,
            images: [url]
        })
        console.log(product)
        if(product.images.length==0)
        throw new Error('Images array cannot be empty')
        product.category = product.category.toLowerCase()
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
        await Product.createIndexes()
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


router.get('/get_all_products',auth,async (req,res)=>{
    try{
        const products = await Product.find()
        res.send(products)
    }catch(error){
        res.status(400).send(error)
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

router.patch('/product/update/:id',auth,upload.single('image'), async (req,res)=>{
    const data = JSON.parse(req.body.data)
    const updates = Object.keys(data)
    const allowedUpdates = ['product_name','description','price','ingredients','discount_percentage','category','in_stock','is_recent','tags']
    const isValidOperation = updates.every(update=> allowedUpdates.includes(update)) 
    if(!isValidOperation)  return res.status(400).send({error:'Invalid updates!'})
    try{
        const product = await Product.findById(req.params.id)
        if(!product)  throw Error('No product found')

        if(req.file !== undefined && req.file.path !== undefined){
            const url =  `${req.protocol}://${req.get('host')}/${filepath}` 
            product['images'][0] = url
        }
        updates.forEach(update=> product[update] = data[update]) //update is the key not value
        await product.save()
        res.send(product)
    }catch(error){
        res.status(400).send({error:error.message})
    }
})

router.get('/product/search',async (req,res)=> {
    try{
        const searchedProducts = []
        const searchText = req.query.search
        if(!searchText)
        throw Error('No search query provided')
        const products = await Product.find({
           // $or : {tags: { $regex: searchText }},
           //product_name: { $regex: searchText }
            //$or: {product_name: { $regex: searchText }}
            $text: { $search: searchText }
        })
        if(products.length == 0)
        throw Error('No products found')
        products.forEach(product => searchedProducts.push(product.getShortProduct()))
        res.send(searchedProducts)

    }catch(error){
        console.log(error)
        res.status(400).send({error:error.message})
    }
})


router.delete('/product/delete_product',auth,async (req,res)=>{
    try{
        const product = await Product.findById(req.query.id)
        if(!product) throw new Error('No product found to delete')
        const category = await Category.findOne({
            category_name: product.category
        })
        if(!category) throw new Error('No product found to delete')

        category.product_list = category.product_list.filter( shortProduct=>{
            return shortProduct.product_id!=product._id
        })
        if(category.product_list.length === 0)
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


module.exports = router