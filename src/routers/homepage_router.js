const express= require('express')
const router=new express.Router()
const Product = require('../models/product')
const PagerProduct = require('../models/pager_products')
const Testimony = require('../models/testimonoal')
const auth = require('../middleware/auth')
const upload = require('../config/multer_config').upload3

router.get('/homepage/get_homepage',async (req,res)=>{
    try{
        const pagerProducts = await getPagerProducts()
        const recentProducts = await getRecentProducts()
        const testimonies = await getTestimonies()

        res.send({pagerProducts,recentProducts,testimonies})

    }catch(error){
        res.status(400).send(error.message)
    }
})

async function getPagerProducts() {
    const pagerProducts = await PagerProduct.find({})
    if(!pagerProducts)
    throw Error('homepage products not found')
    return pagerProducts
}

async function getTestimonies() {
    const testimonies = await Testimony.find({})
    if(!testimonies) throw Error('No testimonies foud')
    return testimonies
}

async function getRecentProducts(){
    const recentProducts = await Product.find({
        is_recent:true
    })
    
    if(!recentProducts)
    throw Error('recent products not found')

    const recentShortProducts = []

    recentProducts.forEach(product => recentShortProducts.push(product.getShortProduct()))

    return recentShortProducts
}

router.post('/homepage/add_testimony',auth,upload.single('image'),async (req,res)=>{

    try{

        const isFormData = req.file !== undefined && req.file.path !== undefined
        const body = isFormData
            ? { customer_name: req.body.customer_name ,
                testimony: req.body.testimony ,
                image: `${req.protocol}://${req.get('host')}/${req.file.path}` }
            : req.body

        const testimony = new Testimony(body)
        await testimony.save()
        res.status(201).send(testimony)
    }catch(error){
        res.status(400).send({error:error.message})
    }

})

router.get('/homepage/get_all_testimonies',auth,async (req,res)=> {
    try {

        const testimonies = await Testimony.find()
        res.send(testimonies?testimonies:[])

    }
    catch (error) {
        res.status(400).send({error})
    }
})
router.delete('/homepage/delete_testimony/:id',auth,async (req,res)=> {
    try {

        const testimony = await Testimony.findById(req.params.id)
        if(!testimony) throw Error('Invalid testimony Id')
        await testimony.delete()

        res.send({
            message: `Testimony with id ${req.params.id} deleted`
        })
    }
    catch (error) {
        res.status(400).send({error})
    }
})

router.get('/homepage/get_pager_products',auth,async (req,res) => {

    try{
        const pagerProducts = await PagerProduct.find()
        const responseArray = []

        for await (let p of pagerProducts) {
            const shortProduct = (await Product.findById(p.product_id)).getShortProduct()
            delete p.product_id
            const responseProduct = {
                id: p._id,
                product: shortProduct,
                image: p.image_url
            }
            responseArray.push(responseProduct)
        }

        res.send(responseArray)

    }catch (error) {
        res.status(400).send({error})
    }
})

router.post('/homepage/pager_product',auth,upload.single('image'),async (req,res)=>{
    try{

        const isFormData = req.file !== undefined && req.file.path !== undefined
        const body = isFormData
            ? { product_id: req.body.product_id ,
                image_url: `${req.protocol}://${req.get('host')}/${req.file.path}` }
            : req.body

        const pagerProduct = new PagerProduct(body)

        const product = await Product.findById(pagerProduct.product_id)
        if(!product) throw Error('Invalid product Id')
        await pagerProduct.save() 
        res.status(201).send(pagerProduct)
    }catch(error){
        res.status(400).send({error:error.message})
    }
})

router.delete('/homepage/pager_product/:id',auth,async (req,res)=> {
    try{
        const pagerProduct = await PagerProduct.findById(req.params.id)
        if(!pagerProduct) throw Error('Invalid product Id')

        await pagerProduct.delete()

        res.send({
            message: `Slideshow product with id ${req.params.id} deleted`
        })

    }catch(error){
        res.status(400).send({error:error.message})
    }
})

module.exports = router