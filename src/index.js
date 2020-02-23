const path = require('path')
const express = require('express')
const app = express()

const angularPath = path.join(__dirname,'../fontend/bioc/src')

app.use(express.static(angularPath))

app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})
