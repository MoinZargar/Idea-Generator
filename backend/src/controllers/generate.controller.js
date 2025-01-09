import { genAi } from "../utils/genAi.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js"


const handlePrompt = asyncHandler(async(req,res)=>{
    const { prompt } = req.body;
    const response = await genAi(prompt);
    return res.status(201).json(
        new apiResponse(200, response, "Response generated sucessfully")
     )

    
})

export {
    handlePrompt
}