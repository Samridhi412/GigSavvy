import mongoose from "mongoose";
const { Schema } = mongoose;
const OrderSchema = new Schema({
    gigId:{
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 0,
    },
    sellerId: {
        type: Number,
        default: 0,
    },
    buyerId: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    payment_intent: {
        type: String,
        required: true,
    },
    
},{
    timestamps:true
});

export default mongoose.model("Order",OrderSchema)