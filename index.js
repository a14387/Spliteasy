import express,{json} from "express";
const app=express();
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"
import router from "./contoller.js"

dotenv.config();

app.use(json());
app.use(cors());

mongoose.connect(process.env.URI,{})
.then(

    console.log("connected")
)
.catch(error=>{ console.log(error)})
   


app.listen(process.env.PORT || 5000,()=>{
    console.log("listening ")
})

app.use("/",router);
