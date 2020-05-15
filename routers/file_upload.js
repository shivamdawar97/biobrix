const upload =require('../config/multer_config')
const express= require('express')
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/upload/upload_image',auth,upload.single('image'),async(req,res)=>{

    try {
            res.send({
                'url':req.file.location
            })

    }catch(error){
        res.status(400).send({error:error.message})
    }

})

module.exports = router