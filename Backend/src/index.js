import express from "express";
const app= express();
import notesRoutes from './routes/notesRoutes.js'
import {connectDB} from './config/data.js'
import dotenv from "dotenv";
import rateLimiter from './middleware/rateLimiter.js'
import cors from "cors";
import path from "path"

dotenv.config();
const PORT= process.env.PORT || 8080;
const __dirname = path.resolve();

//this is only needed in development, in production the frontend will be served from the same server
if(process.env.NODE_ENV !== "production"){ 
//this is a middleware which allow every request from every other URL
if(process.env.CORS === "true"){
   app.use(cors({
      origin: "http://localhost:5173"
   }));
   }
}
app.use(express.json()); //this middleware parse JSON data in req.body
app.use(rateLimiter);


app.use("/api/notes", notesRoutes );

if(process.env.NODE_ENV === "production"){
app.use(express.static(path.join(__dirname,"../frontend/noteapp/dist")));

app.get("*", (req,res)=>{
   res.sendFile(path.join(__dirname, "../frontend/noteapp/dist/index.html"));
})
}
//first connect to the database, then start to listen on the port
connectDB().then(()=>{
 app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`);
 })
})


