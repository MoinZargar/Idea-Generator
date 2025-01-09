import { Router } from "express";
import { handlePrompt } from "../controllers/generate.controller.js";
import { validateData } from "../middlewares/validation.middleware.js"
import { promptSchema } from "../utils/promptSchema.js"

const router = Router();
router.post("/generate",validateData(promptSchema), handlePrompt);

export default router;