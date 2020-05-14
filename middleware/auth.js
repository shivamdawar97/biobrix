const admin = require("firebase-admin");
const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ng-complete1.firebaseio.com"
});

const auth= async (req,res,next)=>{
  try{
      const token =req.header('Authorization').replace('Bearer ','')
      await admin.auth().verifyIdToken(token)
      next()

  }catch(e){
      console.log(e)
      res.status(401).send({error:"Authentication Failes."})
  }   
   
}

module.exports = auth

