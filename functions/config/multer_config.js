const multer = require('multer')
const S3_BUCKET = process.env.S3_BUCKET_NAME;
const multerS3 = require('multer-s3')

//
// const aws = require('../db/aws')
// const s3 = new aws.S3()

/*const upload=multer({
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
})*/

const upload2 = multer({
    fileFilter: function (req, file, cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){ // file.originalname.endsWith('.doc')
            return cb(new Error('Please upload an Image '))
        }
        cb(undefined,true) //if everything goes well (pass 'flase' if u want to reject the upload)
    }
})
const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    destination: (req,file,cb) => {

        const isValid = MIME_TYPE_MAP[file.mimetype];
        cb(isValid?null:new Error('Invalid mime type'),'images/product-images')
    },
    filename: (req,file,cb) => {

        const name = file.originalname.toLowerCase().split(' ').join('-'); //this will miss the file extenstion
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null,  `${name}-${Date.now()}.${ext}`)
    }
})

const upload3 = multer({storage: storage})

const upload4 = multer({dest:'images/product-images'})

module.exports = { upload2,upload3,upload4 }