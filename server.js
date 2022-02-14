import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./src/routes/userRoutes";
import tourRoutes from "./src/routes/tourRoutes";
import voteRoutes from "./src/routes/votesRoute";

dotenv.config("./.env");

const app = express();
app.use(cors())

app.use(bodyParser.json());

app.use("/user",userRouter);
app.use("/tour",tourRoutes);
app.use("/vote",voteRoutes);
 

app.use("/", (req, res) => res.status(400).json({
    message:"This Tour API is not exist"
}));


const dbUrl=process.env.DATABASEURL;

mongoose.connect(dbUrl).then(()=> console.log("Database connected successfully"));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});

export default app;
