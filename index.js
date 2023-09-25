import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import commentRoutes from "./routes/comment.js";
import videoRoutes from "./routes/videos.js";

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


app.use(express.json());
app.use("/api/auth/", authRoutes);
app.use("/api/users/", userRoutes);
app.use("/api/users/", videoRoutes);
app.use("/api/users/", commentRoutes);

app.use(( err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong";

    return res.status(status).json({
        success : false,
        status,
        message,
    })
})

app.get("/", (req,res)=>{
    res.json("heli")
})


app.listen(3000, ()=>{
    connect();
    console.log(`running on 3000`);
})