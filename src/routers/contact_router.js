const express = require('express')
const router = new express.Router()
const config = require('../config/config')
const client = config.twillioClient

router.post('/contacy_us', async (req,res)=>{
    try{
        const phoneNumber = process.env.PHONE_NUMBER
        if(!phoneNumber)
        throw new Error('Provide phone number')
        const message = await client.messages.create({
            body: `Biobbrix Contact Request\nName: ${req.body.name}\nContact: ${req.body.contact}\nMessage: ${req.body.message}`,
            from:config.twilioPhoneNumber,
            to:phoneNumber
        })
        
        res.send(message)
    }catch(error){
        res.status(400).send({error:error.message})
    }
})

router.post('/trade_enquiry', async (req,res)=>{
    try{
        const phoneNumber = process.env.PHONE_NUMBER
        if(!phoneNumber)
        throw new Error('Provide phone number')
        const message = await client.messages.create({
            body: `Biobbrix TRADE ENQUIRY
            \n Name : ${req.body.name}
            \n Email : ${req.body.email}
            \n Mobile : ${req.body.mobile}
            \n City : ${req.body.city}
            \n State : ${req.body.state}
            \n Country : ${req.body.country}
            \n Age : ${req.body.age}
            \n Reference : ${req.body.reference}
            \n Company Name : ${req.body.company}
            \n Assosiate with Pharam : ${req.body.associated}
            \n Exposure to derma : ${req.body.exposure}
            \n Address : ${req.body.address}
            \n Profile : ${req.body.profile}
            \n Enquiry : ${req.body.comments}`,
            from:config.twilioPhoneNumber,
            to:phoneNumber
        })
        await new Promise(resolve => setTimeout(resolve,2000))
        res.send(message)
    }catch(error){
        res.status(400).send({error:error.message})
    }
})

module.exports = router