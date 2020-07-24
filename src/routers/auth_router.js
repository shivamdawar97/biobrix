const express = require('express')
const router = new express.Router()
const client = require('../config/config').twillioClient

router.get('/phone/send_otp', async (req,res)=>{
    try{
        const phoneNumber = req.query.phone_number
        if(!phoneNumber)
        throw new Error('Provide phone number')
        const verification = await client.verify.services(config.serviceId).verifications.create({
            to:`+91${phoneNumber}`,
            channel: 'sms'
        })
        if(verification.status=='pending')
        res.send({status:'pending'})
        else throw new Error('Invaid otp')
    }catch(error){
        console.log(error)
        res.status(400).send({error:error.message})
    }
})

router.get('/phone/verify', async (req,res)=>{
    try{
        const phoneNumber = req.query.phone_number
        const code = req.query.otp
        if(!phoneNumber || !code )
        throw new Error('Provide query params')
        const verification = await client.verify.services(config.serviceId).verificationChecks.create({
            to:`+91${phoneNumber}`,
            code
        })
        if(verification.status=='approved')
        res.status(201).send({status:'verified'})
        else throw new Error('Invaid otp')
    }catch(error){
        res.status(400).send({error:error.message})
    }
})

module.exports = router