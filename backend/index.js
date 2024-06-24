import express from "express";
import mongoDB from "./Server/Database/db.js";
import router from "./Routes/CreateUser.js"
import router2 from "./Routes/DisplayData.js";
import cors from "cors"
import router3 from "./Routes/OrderData.js";
const app = express()
app.use(express.json())
const port = 5000
app.use(cors());
mongoDB()

app.use((req,res,next) =>{
    
    res.setHeader("Access-Control-Allow-Origin","https://go-food-deployment-server.vercel.app")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requeted-With,Content-Type,Accept"
    )
    next()
   
})



app.use("/",router)
app.use("/",router2)
app.use("/",router3)
app.listen(port,()=>{
    console.log(`Server is running on port ${port} `)
})