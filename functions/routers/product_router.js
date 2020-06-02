const express= require('express')
const router=new express.Router()
const Product = require('../models/product')
const Category = require('../models/category')
const auth = require('../middleware/auth')
const upload = require('../config/multer_config').upload3

const updateCategory = async (product,isUpdate) => {

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
        if(isUpdate) {
            const index = category.product_list.findIndex( p => p.product_id === product._id.toString())
            if(index!== -1) category.product_list[index] = shortProduct
        }
        else category.product_list.push(shortProduct)

        await category.save()
    }
}


router.post('/product/add_product',auth,upload.single('image'),async (req,res)=>{
     
    try{

        const isFormData = req.file !== undefined && req.file.path !== undefined
        const body = isFormData? JSON.parse(req.body.data) : req.body

        const product = new Product( isFormData
            ? { ...body,images: [`${req.protocol}://${req.get('host')}/${req.file.path}`]}
            : body )

        if(product.images.length===0)
        throw new Error('Images array cannot be empty')
        product.category = product.category.toLowerCase()

        await product.save()
        await updateCategory(product,false)
        await Product.createIndexes()

        res.status(201).send(product)

    }catch(error){
        res.status(400).send({error: error.message})
    }
})

router.patch('/product/update/:id',auth,upload.single('image'), async (req,res)=>{
    try{

        const isFormData = req.file !== undefined && req.file.path !== undefined
        const body = isFormData? JSON.parse(req.body.data) : req.body
        const updates = Object.keys(body)
        const allowedUpdates = ['product_name','description','price','ingredients','discount_percentage','in_stock','is_recent','tags']
        const isValidOperation = updates.every(update=> allowedUpdates.includes(update)) 
        if(!isValidOperation)  return res.status(400).send({error:'Invalid updates!'})

        const product = await Product.findById(req.params.id)
        if(!product)  throw Error('No product found')

        if(isFormData){
            const filepath = req.file.path
            const img_url = `${req.protocol}://${req.get('host')}/${filepath}`
            product.images = [img_url]
        }
        updates.forEach(update=> product[update] = body[update]) //update is the key not value
        await product.save()
        const isChangeNeeded = !!updates.find(update => update === 'product_name'|| update === 'price' ) || isFormData
        if(isChangeNeeded) await updateCategory(product,true)

        res.send(product)
    }catch(error){
        res.status(400).send({error:error.message})
    }
})


router.get('/product/product_list',async (req,res)=>{

    try{
        const id = req.query.categoryId
        
        const categoryWiseProdcts = id===undefined? await Category.find({}) : await Category.findById(id)
        
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

router.get('/product/search',async (req,res)=> {
    try{
        const searchedProducts = []
        const searchText = req.query.search
        if(!searchText)
        throw Error('No search query provided')
        const products = await Product.find({
            $text: { $search: searchText }
        })
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