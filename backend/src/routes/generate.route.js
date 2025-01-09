import { Router } from "express";
import { generateResponse } from "../controllers/generate.controller.js";

const router = Router();
router.get("/generate", generateResponse);

export default router;