const admin = require('firebase-admin')

try {
    admin.initializeApp({projectId:'ng-complete1'});
    console.log('Initialized firebase app')
}catch(error){
    console.log(error)
    console.log('Firebase app initialization failed')
}

module.exports = admin