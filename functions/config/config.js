const functions = require('firebase-functions')
process.env.MONGODB_URL = functions.config().biobrix.mongodb_url

process.env.PAYTM_MERCH_ID = functions.config().biobrix.paytm_merchant_id
process.env.PAYTM_MERCH_KEY = functions.config().biobrix.paytm_merchant_key

process.env.TWILIO_SERVICE_ID = functions.config().biobrix.twilio_service_id
process.env.TWILIO_ACCOUNT_SID = functions.config().biobrix.twilio_account_sid
process.env.TWILIO_AUTH_TOKEN = functions.config().biobrix.twilio_auth_token


const paytmConfig = {
    mid : process.env.PAYTM_MERCH_ID ,
    key : process.env.PAYTM_MERCH_KEY,
    website: 'WEBSTAGING',
    transactionUrl: 'https://securegw-stage.paytm.in/theia/processTransaction',
    hostName: 'securegw-stage.paytm.in'
}

module.exports = {
    serviceId:process.env.TWILIO_SERVICE_ID,
    accountSID:process.env.TWILIO_ACCOUNT_SID,
    authToken:process.env.TWILIO_AUTH_TOKEN,
    twilioPhoneNumber:'+14703308801',
    paytmConfig
}
