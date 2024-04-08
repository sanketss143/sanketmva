import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import secondFormRoute from "./routes/secondFormRoute.js"


const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();


const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{

    console.log("DB connected successfully");

    app.listen(PORT, ()=>{
        console.log(
            `Server Running in ${process.env.NODE_MODE} Mode on port  ${process.env.PORT}`
            );
    })

}).catch(error => console.log(error));


app.use("/api", userRoute);
app.use("/api", secondFormRoute);