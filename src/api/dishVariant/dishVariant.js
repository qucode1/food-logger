import mongoose, { Schema } from "mongoose";

const DishVariantSchema = new Schema({
    dish: {
        type: Schema.Types.ObjectId,
        ref: 'Dish',
        required: true
    },
    origin: {
        type: Schema.Types.ObjectId,
        ref: 'Origin'
    },
})

export default mongoose.models.dishVariant || mongoose.model('dishVariant', DishVariantSchema);
