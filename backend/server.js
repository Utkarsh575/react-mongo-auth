import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import initDbclient from "./database.js";
import router from "./routes/router.js";
dotenv.config();

const port = process.env.PORT || 9000;
const app = express();
app.use(express.json());
app.use(cors());
initDbclient();
app.get("/", (req, res) => {
  res.send("[ ⚡SERVER ]:- Server is running... ");
});
app.use("/router", router);

app.listen(port, () => {
  console.log(`[⚡server ] : Server Running on http://localhost:${port}`);
});
