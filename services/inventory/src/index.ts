import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "Up" });
});

const port = process.env.PORT || 4002;
const serviceName = process.env.SERVICE_NAME || 'inventory-service';

app.listen(port, ()=>{
    console.log(`${serviceName} is running on port ${port}`);
})


