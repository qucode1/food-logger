import mongoose, { Schema } from "mongoose";

const BrandSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

export default mongoose.models.brand || mongoose.model('brand', BrandSchema);