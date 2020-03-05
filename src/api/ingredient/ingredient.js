import mongoose, { Schema } from 'mongoose';

const IngredientSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    variants: {
        type: [Schema.Types.ObjectId],
        ref: 'IngredientVariant'
    }
})

export default mongoose.models.ingredient || mongoose.model('ingredient', IngredientSchema);