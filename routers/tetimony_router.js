const express = require('express')
const router = new express.Router()
const Testimony = require('../models/testimonoal')

router.post('/testimony/add_testimony',async (req,res)=>{

    try{

        const testimony = new Testimony(req.body)
        await testimony.save()
        res.status(201).send(testimony)


    }catch(error){
        res.status(400).send({error:error.message})
    }

})



router.get('/testimony/get_testimonies',async (req,res)=>{

    try{

        const testimonies = await Testimony.find({})
        if(!testimonies) throw Error('No testimonies foud')

        res.send(testimonies)
        
    }catch(error){
        res.status(400).send({error:error.message})
    }

})

module.exports = router