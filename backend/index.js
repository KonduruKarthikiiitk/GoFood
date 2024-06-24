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
    res.send("server is running")
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requeted-With,Content-Type,Accept"
    )
    next()
   
})



app.use("https://go-food-deployment-server.vercel.app/",router)
app.use("https://go-food-deployment-server.vercel.app/",router2)
app.use("https://go-food-deployment-server.vercel.app/",router3)
app.listen(port,()=>{
    console.log(`Server is running on port ${port} `)
})