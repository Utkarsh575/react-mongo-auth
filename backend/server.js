import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import  initDbclient  from "./database.js";
dotenv.config();

const port = process.env.PORT || 9000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Running only pa ");
});

app.listen(port, () => {
    initDbclient();
  console.log(`[⚡server ] : Server Running on http://localhost:${port}`);
});
