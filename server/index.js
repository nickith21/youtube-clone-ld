import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import videoRoutes from "./routes/video.js";
import commentRoutes from "./routes/comment.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express();
dotenv.config();
app.use(cors());

const connect = () => {
    mongoose
        .connect(process.env.MONGO)
        .then(() => {
            console.log("Connected to DB");
        })
        .catch((err) => {
            throw err;
        });
};

app.use(express.json());
app.use(cookieParser())
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/auth", authRoutes);

// this function has no mount path and is executed every time the app receives a request
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    // console.log("res",res)
    return res.status(status).json({
        success: false,
        status: status,
        message: message,
    });
});

app.listen(8800, () => {
    console.log("Running on port 8800");
    connect();
});
