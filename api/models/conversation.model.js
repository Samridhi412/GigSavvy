import mongoose from "mongoose";
const { Schema } = mongoose;
const ConversationSchema = new Schema({
    id:{
        type: String,
        required: true,
        unique: true,
    },
    sellerId: {
        type: Number,
        default: 0,
    },
    buyerId: {
        type: String,
        required: true,
    },
    ReadByBuyer: {
        type: Boolean,
        default: false,
    },
    ReadBySeller: {
        type: String,
        required: true,
    },
    lastMessage: {
        type: String,
        required: false,
    },
    
},{
    timestamps:true
});

export default mongoose.model("Conversation",ConversationSchema)