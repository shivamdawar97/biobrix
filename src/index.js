const app = require('./app')
const port = process.env.PORT 
const dyno_url = 'https://biobrix-healthcare.herokuapp.com/'
const wakeUpDyno = require('./routers/wakeup_dyno')

app.listen(port,_=>{
    console.log('Server is up on port '+ port)
    wakeUpDyno(dyno_url)
})
