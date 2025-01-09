import { z } from "zod";

export default  promptSchema = z.object({
    prompt: z.string().min(3).max(150)
});