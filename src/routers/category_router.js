const express= require('express')
const router=new express.Router()

const Category = require('../models/category')

router.get('/category/category_list',async (req,res)=>{
    try{
        const categoryNames = []
        const categories = await Category.find({})
        if(!categories)
        throw new Error('No category found')
        
        categories.forEach(category=>{
            categoryNames.push({
                categoryName: category.category_name,
                id: category._id 
            })
        })
        res.send(categoryNames)

    }catch(error){
        res.status(400).send(error.message)
    }
})
module.exports = router
