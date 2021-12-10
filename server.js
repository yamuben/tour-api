import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./src/routes/userRoutes";

dotenv.config("./.env");

const app = express();

app.use(bodyParser.json());

app.use("/user",userRouter);
 
app.use("/test", (req, res) => res.status(200).json({
    message:"This is Tour AP"
}));



const dbUrl=process.env.DATABASEURL;

mongoose.connect(dbUrl).then(()=> console.log("Database connected successfully"));



app.listen(3030, () => {
  console.log(`Server is running on Port 3030`);
});

export default app;
