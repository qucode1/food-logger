import mongoose, { Schema } from "mongoose";

const DishSchema = {
    name: {
        type: String,
        required: true
    },
    variants: {
        type: [Schema.Types.ObjectId],
        ref: 'DishVariant'
    }
}

export default mongoose.models.dish || mongoose.model('dish', DishSchema);