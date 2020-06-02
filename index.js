const app = require('./functions/app')
const functions = require('firebase-functions')

exports.app = functions.https.onRequest(app)

// const port = process.env.PORT
//
// app.listen(port,_=>{
//     console.log('Server is up on port '+ port)
// })
