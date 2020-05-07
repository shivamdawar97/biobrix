const paytmConfig = {
    mid : process.env.PAYTM_MERCH_ID || 'GpfBCX42323873899427',
    key : process.env.PAYTM_MERCH_KEY || 'HFfseLgiqJf7ZLvB',
    website: process.env.PAYTM_MERCH_WEBSITE || 'WEBSTAGING',
    transactionUrl: process.env.PAYTM_TXN_URL || 'https://securegw-stage.paytm.in/theia/processTransaction',
    hostName:  process.env.PAYTM_HOST || 'securegw-stage.paytm.in'
}

module.exports = {
    serviceId:process.env.TWILIO_SERVICE_ID,
    accountSID:process.env.TWILIO_ACCOUNT_SID,
    authToken:process.env.AUTH_TOKEN,
    twilioPhoneNumber:process.env.TWILLIO_NUMBER,
    paytmConfig
}
