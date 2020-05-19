const admin = require('firebase-admin')
const path = require('path')

const firebaseKey = require('./config').firebaseKeys
const data = JSON.stringify(firebaseKey)
const fs = require('fs')

//path to json file
const serviceAccount = path.join(__dirname,'../config/firebase-key.json')

try {
    //write to json file
    fs.writeFileSync(serviceAccount,data)
    //Initialize firebase app with the written file
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://ng-complete1.firebaseio.com",
        storageBucket: "ng-complete-1.appspot.com"
    });
    //Make the file empty after use
    fs.writeFileSync(serviceAccount,'')
    console.log('Initialized firebase app')
}catch(error){
    console.log(error)
    console.log('Firebase app initialization failed')
}

module.exports = admin