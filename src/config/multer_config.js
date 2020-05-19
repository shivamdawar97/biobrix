const multer =require('multer')
const S3_BUCKET = process.env.S3_BUCKET_NAME;
const multerS3 = require('multer-s3')
const aws = require('../db/aws')

const s3 = new aws.S3()

const upload=multer({
    storage: multerS3({
        s3,
        bucket: `${S3_BUCKET}/images`,
        acl:'public-read',
        metadata: (req,file,cb)=>{
            cb(null,{fieldName:'Testing-metadata'})
        },
        key: (req,file,cb)=>{
            const mimetype = file.mimetype
            cb(null,`${Date.now()}.${mimetype.substring(6,mimetype.length)}`)
        }
        
    }),
    limits:{
        fileSize: 1000000 // 1 MB
    },
    fileFilter(req,file,cb){ //filter out the file that we doesn't want to upload
        //called internally by multer
        // cb --> Call Back
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){ // file.originalname.endsWith('.doc')
            return cb(new Error('Please upload an Image '))
        }
        cb(undefined,true) //if everything goes well (pass 'flase' if u want to reject the upload)
    }
})

const upload2 = multer({
    fileFilter: function (req, file, cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){ // file.originalname.endsWith('.doc')
            return cb(new Error('Please upload an Image '))
        }
        cb(undefined,true) //if everything goes well (pass 'flase' if u want to reject the upload)
    }
})

module.exports = { upload,upload2 }