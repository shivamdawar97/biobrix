const upload =require('../config/multer_config').upload
const upload2 =require('../config/multer_config').upload2
const express= require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const storage = require('../middleware/storage')

router.post('/upload/upload_image',auth,upload.single('image'),async(req,res)=>{

    try {
            res.send({
                'url':req.file.location
            })

    }catch(error){
        res.status(400).send({error:error.message})
    }

})

router.post('/upload_image',upload2.single('image'),storage,async(req,res)=>{
    try {
            res.send({'url':req.imageurl})
    }catch(error){
        res.status(400).send({error:error.message})
    }

})

module.exports = router