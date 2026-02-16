import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"



const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware())


await connectDB();
//API ROUTES
app.get('/',(req,res) =>{
    return res.status(200).json({message: '🙏 Welcome to the server 🙏'})
})
app.use("/api/inngest", serve({ client: inngest, functions }));

app.listen(PORT, () => console.log(`🚀 Server started and ✅ running on PORT:${PORT}`))

