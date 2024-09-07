import express from "express"
import cors from "cors"
import {connectDB} from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js";

// app- config
const app = express()
const port = 4000;

// middleware
app.use(express.json()) 
app.use(cors())

// db connection
connectDB();

// API endpoints

app.use("/api/food",foodRouter)

app.get("/", (req, res)=>{
    res.send("API is working")
})

app.listen(port, ()=>{
    console.log(`Server is working on the http://localhost:${port}`)
})



// mongodb+srv://ansh:9838698121@cluster0.1pzbu.mongodb.net/?