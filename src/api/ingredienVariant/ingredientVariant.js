import mongoose, { Schema } from 'mongoose';

const IngredientVariantSchema = new Schema({
    ingredient: {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient',
        required: true
    },
    origin: {
        type: Schema.Types.ObjectId,
        ref: 'Origin',
        required: true
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand'
    }
})

export default mongoose.models.ingredientVariant || mongoose.model('ingredientVariant', IngredientVariantSchema)