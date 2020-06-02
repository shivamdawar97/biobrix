const admin = require('../config/firebase_admin')
const bucket =  admin.storage().bucket()


const storage = async (req,res,next) => {
  try{
    const { originalname, buffer, mimetype } = req.file
    const blob = bucket.file(originalname.replace(/ /g, "_"),{
        metadata: {
            metadata : {
              firebaseStorageDownloadTokens: req.token
            }
        }
        
    })
    const blobStream = blob.createWriteStream({
      resumable: false,
      contentType: mimetype
    })
    blobStream.on('finish', () => {
      const publicUrl = `https://firebasestorage.googleapis.com/v0/b/ng-complete1.appspot.com/o/${blob.name}?alt=media`
      
      //https://firebasestorage.googleapis.com/v0/b/ng-complete1.appspot.com/o/images%2FEOZSrbzUUAEOMbK.jpeg?alt=media
      req.imageurl = publicUrl
      next()
    })
    .on('error', (error) => {
        console.log(error)
        res.status(400).send(error)
    })
    .end(buffer)
  }
  catch(error){
    console.log(error)
    res.status(401).send(error)
  }
}

module.exports = storage