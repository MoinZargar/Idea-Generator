import { apiError } from "../utils/apiError.js";

export const validateData = (schema)=>{
    return (req, res, next) => { 
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            throw new apiError(400, "Input validation failed", error.errors)
        }
    }
}