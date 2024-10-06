import mongoose, { connect } from "mongoose"
export const connectDB=async()=>{
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`);
       console.log("DatabaseConnected!! Database host",connectionInstance.connection.host)
    } catch (error) {
        console.log("error in database connection",error)
        process.exit(1)
    }
}