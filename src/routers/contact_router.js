const express = require('express')
const router = new express.Router()
const config = require('../config/config')
const client = config.twillioClient

router.post('/contacy_us', async (req,res)=>{
    try{
        const phoneNumber = process.env.PHONE_NUMBER
        if(!phoneNumber)
        throw new Error('Provide phone number')
        // const message = await client.messages.create({
        //     body: `New Biobbrix contact request\nName: ${req.body.name}\nContact: ${req.body.contact}\nMessage: ${req.body.message}`,
        //     from:config.twilioPhoneNumber,
        //     to:phoneNumber
        // })
        await new Promise(resolve => setTimeout(resolve,2000))
        res.send(message)
    }catch(error){
        res.status(400).send({error:error.message})
    }
})

module.exports = router