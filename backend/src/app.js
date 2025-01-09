import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
const app = express();  

dotenv.config({
    path: '.env'
})
const corsOptions = {
    origin: process.env.CORS_ORIGIN, 
    methods: 'GET,POST,PUT,DELETE',
    credentials: true 
};
app.use(cors(corsOptions));
app.use(express.json({limit:"16kb"}));   
app.use(express.urlencoded({extended:true,limit:"16kb"}));

import generateRoute from "./routes/generate.route.js";
app.use("/api/v1", generateRoute);

app.use(errorHandler);

export default app;