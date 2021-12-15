import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./src/routes/userRoutes";
import tourRoutes from "./src/routes/tourRoutes";

dotenv.config("./.env");

const app = express();

app.use(bodyParser.json());

app.use("/user",userRouter);
app.use("/tour",tourRoutes);
 

app.use("/", (req, res) => res.status(400).json({
    message:"This Tour API is not exist"
}));


const dbUrl=process.env.DATABASEURL;

mongoose.connect(dbUrl).then(()=> console.log("Database connected successfully"));



app.listen(3030, () => {
  console.log(`Server is running on Port 3030`);
});

export default app;
