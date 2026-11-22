import mongoose from 'mongoose' 
import { DB_NAME } from '../constant.js'

const connect_DB = async()=>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("database connected successfully")
    } catch (error) {
        console.log("database connection failed") ;
        process.exit(1) ;
    }
}

export {connect_DB}