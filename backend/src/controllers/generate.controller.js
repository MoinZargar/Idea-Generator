import { genAi } from "../utils/genAi.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js"
import { Chat } from "../models/chat.model.js"


const handlePrompt = asyncHandler(async(req,res)=>{
    const { prompt } = req.body;
    const response = await genAi(prompt);
    if(!response){
        throw new apiError(500, "Something went wrong while generating response")
    }
    
    const chat= await Chat.create({
       prompt,
       response
    })

    if(!chat){
        throw new apiError(500,"The server is currently down. Please try again later.")
    }
    
    return res.status(201).json(
        new apiResponse(200, response, "Response generated sucessfully")
     )

    
})

export {
    handlePrompt
}