import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const verify = jwt.verify();
export const auth = async (req, res) => {
  let token = req.body.token;

  try {
    let user = verify(token, process.env.JWT_SECRET);
    return res.json({ status: "ok" });
  } catch (err) {
    return res.json({ status: "error" });
  }
};
