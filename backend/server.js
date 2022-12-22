import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const port = process.env.PORT || 9000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Runnig only pa ");
});

app.listen(port, () => {
  console.log(`[⚡server] : Server Running on http://localhost:${port}`);
});
