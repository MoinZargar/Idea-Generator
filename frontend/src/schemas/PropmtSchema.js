import { z } from "zod";

const  PromptSchema = z.object({
    prompt: z.string().min(3).max(150)
});

export { PromptSchema };