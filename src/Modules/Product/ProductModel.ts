
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    tags:{
        type:[String],
        default : []
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required : true
    }
})

export default mongoose.model('Products', ProductSchema);