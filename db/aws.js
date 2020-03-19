const aws = require('aws-sdk')

//aws.config.region = 'ap-south-1'
aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region:'ap-south-1'
    
})

module.exports = aws