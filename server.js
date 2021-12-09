import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use("/test", (req, res) => res.status(200).json({
    message:"This is Tour APi"
}));

app.listen(3030, () => {
  console.log(`Server is running on Port 3030`);
});

export default app;
