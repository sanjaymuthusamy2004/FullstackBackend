import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

import userRouter from "./routes/user-router.js";
import adminRouter from "./routes/admin-router.js";
import movieRouter from "./routes/movie-router.js";
import bookingsRouter from "./routes/booking-router.js";
import cors from "cors";


const app = express();
app.get('/', (req, res) => {
  
  res.send('Welcome to Movie ticket Booking  Backend side');
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

mongoose
  .connect(
    

    `mongodb+srv://sanjay:${process.env.MONGODB_PASSWORD}@cluster0.rpjmbgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Connected To Database And Server is running")
    )
  )
  .catch((e) => console.log(e));
