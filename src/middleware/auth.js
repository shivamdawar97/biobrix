const admin = require('../config/firebase_admin')

const auth= async (req,res,next)=>{
  try{
      const token =req.header('Authorization').replace('Bearer ','')
      await admin.auth().verifyIdToken(token)
      req.token = token
      next()

  }catch(e){
      console.log(e)
      res.status(401).send({
          message: e.message,
          error:e
      })
  }   
   
}

module.exports = auth

