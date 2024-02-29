import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: {
        type: Number,
        default : 0
    }
})

export default mongoose.model('Users', UserSchema);