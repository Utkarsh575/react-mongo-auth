import express from "express";
import { createUser } from "../controllers/createUser.js";
import { login } from "../controllers/Login.js";
const router = express.Router();

router.post("/create", createUser);
router.post("/login",login);

export default router;