import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "ACTIVE"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    retrievedAt: {
        type: Date
    }
});

export default mongoose.models.Message || mongoose.model("Message", MessageSchema);