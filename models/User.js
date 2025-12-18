import mongoose from "mongoose";
import Razorpay from "razorpay";
const {Schema,model} = mongoose;

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String },
    username: { type: String, required: true },
    profilepic: { type: String },
    coverpic: { type: String },
    RazorpayId: { type: String },
    RazorpaySecret: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || model("User", UserSchema);