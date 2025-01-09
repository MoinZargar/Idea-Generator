import { Router } from "express";
import { handlePrompt } from "../controllers/generate.controller.js";

const router = Router();
router.post("/generate", handlePrompt);

export default router;