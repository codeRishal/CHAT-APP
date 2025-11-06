import express from "express"
import dotenv from"dotenv"

import {connectDB} from "./lib/db.js"
import authRoutes from"./routes/auth.routes.js"

dotenv.config()


const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const PORT=process.env.PORT;
console.log("PORT from env:", process.env.PORT);

app.use("/api/auth", authRoutes)

app.listen(PORT, ()=>{
    console.log("sever is running on port:"+PORT);
    connectDB();
})