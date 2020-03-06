const express = require('express')
const router = new express.Router()
const config = require('../config/config')
const Twilio = require('twilio')

const client = new Twilio(config.accountSID ,config.authToken)

router.post('/phone/send_otp', async (req,res)=>{

    try{
        const message = await client.messages.create({
            body: 'Hello from node',
            from:config.twilioPhoneNumber,
            to:'+919871280363'
        })
        console.log(message.sid)
        res.send(message)
    }catch(error){
        res.status(400).send(error.message)
    }
})

module.exports = router