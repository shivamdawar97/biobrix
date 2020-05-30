const express = require('express')
const router = new express.Router()

const Product = require('../models/product')
const PendingReview = require('../models/pending_review')
const auth = require('../middleware/auth')


router.post('/review/submit_review',async (req,res)=>{
    try{
        const pendingReview = new PendingReview(req.body)
        const product =  await Product.findById(pendingReview.product_id)
        if(!product) throw Error('Product not found')
        await pendingReview.save();
        res.status(201).send({
            pendingReview,
            status:'Pending to be accepted by admin'
        })

    }catch(error){
        res.status(400).send({error: error.message})
    }
})

router.get('/review/get_all_reviews',auth,async (req,res)=> {
    try {

        const reviews = await PendingReview.find()
        res.send(reviews? reviews: [])

    }
    catch (error) {
        res.status(400).send({error})
    }
})


router.post('/review/acknowledge_review',auth,async (req,res)=>{
    try{

        const id = req.body.reviewId
        const isAcknowledge = req.body.acknowledge
        
        const review = await PendingReview.findById(id)

        if(!review) throw Error('No review found')
        
        if(isAcknowledge) {
        const product = await Product.findById(review.product_id)

        product.reviews.push(review)
        await product.save()
        await review.delete()   
        res.status(201).send({
            status:'Added to product review list'
        })
        }
        else {
            await review.delete()
            res.send({
                status:'Deleted'
            })
        }


    }catch(error){
        res.status(400).send({error: error.message})
    }
})

router.delete('/review/delete/:id',auth,async (req,res)=>{
    try{
        const review_id = req.params.id;
        const product_id = req.query.product_id;
        const product = await Product.findById(product_id)

        if(!product) throw Error('Product not found')

        product.reviews = product.reviews.filter(function(value){
            return value._id != review_id
        })

        await product.save()
        res.send({
            product,
            status:'Review Deleted'
        })
         
    }catch(error){
        res.status(400).send({error: error.message})
    }
})

module.exports = router