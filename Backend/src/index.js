import express from "express";
const app= express();
import notesRoutes from './routes/notesRoutes.js'
import {connectDB} from './config/data.js'
import dotenv from "dotenv";
import rateLimiter from './middleware/rateLimiter.js'
import cors from "cors";

dotenv.config();
const PORT= process.env.PORT || 8080;

app.use(cors({
   origin: "http://localhost:5173"
})); //this is a middleware which allow every request from every other URL

app.use(express.json()); //this middleware parse JSON data in req.body
app.use(rateLimiter);


app.use("/api/notes", notesRoutes );

//first connect to the database, then start to listen on the port
connectDB().then(()=>{
 app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`);
 })
})


