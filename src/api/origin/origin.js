import mongoose, { Schema } from "mongoose";

const OriginSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        enum: ['Home-Cooked', 'TV-Dinner', 'Restaurant'],
        default: 'Home-Cooked',
        required: true
    }
})

export default mongoose.models.origin || mongoose.model('origin', OriginSchema);