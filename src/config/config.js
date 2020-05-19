const paytmConfig = {
    mid : process.env.PAYTM_MERCH_ID ,
    key : process.env.PAYTM_MERCH_KEY,
    website: 'WEBSTAGING',
    transactionUrl: 'https://securegw-stage.paytm.in/theia/processTransaction',
    hostName: 'securegw-stage.paytm.in'
}
const firebaseKeys = {
    type: 'service_accoun',
    project_id: 'ng-complete1',
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
    client_email: 'firebase-adminsdk-ygnkx@ng-complete1.iam.gserviceaccount.com',
    client_id: process.env.GOOGLE_CLIENT_ID,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ygnkx%40ng-complete1.iam.gserviceaccount.com'
  }
  
module.exports = {
    serviceId:process.env.TWILIO_SERVICE_ID,
    accountSID:process.env.TWILIO_ACCOUNT_SID,
    authToken:process.env.AUTH_TOKEN,
    twilioPhoneNumber:process.env.TWILLIO_NUMBER,
    paytmConfig,
    firebaseKeys
}
