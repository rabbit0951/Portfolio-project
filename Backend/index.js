import "dotenv/config"
import {connectDB} from "./src/db/db.js" 
import {app} from "./src/app.js"
const PORT = process.env.PORT


// Database Connection
connectDB()
.then(()=>(app.listen(PORT,()=>{console.log(`server is running on PORT ${PORT}`)})))
.catch((err)=>{console.log("Database connection error",err)})