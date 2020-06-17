const admin = require('../config/firebase_admin')

const auth= async (req,res,next)=>{
  try{
      const token =req.header('Authorization').replace('Bearer ','')
      await admin.auth().verifyIdToken(token)
      req.token = token
      next()

  }catch(e){
      res.status(400).send({
          message: 'Authentication failed',
          error:e.message
      })
  }   
   
}

module.exports = auth

