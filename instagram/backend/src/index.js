import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

const {connect_DB} = await import ('./db/dbConnection.js')
const {app} = await import('./app.js')

connect_DB()
.then(()=>{
    app.listen(process.env.PORT || 4000 , ()=>{
        console.log("server is running on port number 4000")
    })
})
.catch((error)=>{
    console.log("server can not start ",error)
})