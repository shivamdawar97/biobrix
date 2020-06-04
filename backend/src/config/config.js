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
    authToken:process.env.AUTH_TOKEN,
    twilioPhoneNumber:process.env.TWILLIO_NUMBER,
    paytmConfig
}
