const admin = require('../config/firebase_admin')
const bucket = admin.storage().bucket()

const upload = async (req,res,next) => {
    try{
        const image = req.file
        const file = bucket.file(image.originalname)
        file.createWriteStream( {
            metadata: {
                contentType: req.file.mimetype
              },
              resumable: false
        } )
        .on('error', err => { throw err })
        .on('finish', async _=> {
            await file.makePublic()            
            next()
        })
        .end(image.buffer)

    }catch (e) {
        res.status(400).send(e)
    }
}

module.exports = upload