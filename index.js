import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((error)=>{
        throw error;
    })
}

app.get('/', (req,res)=> {
    res.send("helllo Worlds");
});

app.listen(3000, ()=>{

    connect();
    console.log(`running on 3000`);
})