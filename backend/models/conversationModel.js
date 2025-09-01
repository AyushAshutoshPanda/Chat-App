// ye message controller ke liye use kia hun waha conversation kiske iske bich conversation hua he check ke liye and others
import mongoose from "mongoose";

const conversationModel = new mongoose.Schema({
       participant:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
       }],
        messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
        }]
},{timestamps:true})
export const Conversation = mongoose.model("Conversation",conversationModel)

