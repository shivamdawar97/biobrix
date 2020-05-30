const admin = require('firebase-admin')
const path = require('path')

// const adminConfig = require('./config').firebaseAdminConfig
// const data = JSON.stringify(adminConfig)
// const fs = require('fs')
//
// //path to json file
// const serviceAccount = path.join(__dirname,'../config/firebase-key.json')

try {
    //write to json file
    //fs.writeFileSync(serviceAccount,data)
    //Initialize firebase app with the written file
    // const credential = admin.credential.cert(serviceAccount)
    // const credential = admin.credential.cert({
    //     projectId:'ng-complete1',
    //     clientEmail: process.env.GOOGLE_CLIENT_ID,
    //     privateKey:process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
    // })
    admin.initializeApp();
    // databaseURL: "https://ng-complete1.firebaseio.com",
    
    //Make the file empty after use
    //fs.writeFileSync(serviceAccount,'')
    console.log('Initialized firebase app')
}catch(error){
    console.log(error)
    console.log('Firebase app initialization failed')
}

module.exports = admin