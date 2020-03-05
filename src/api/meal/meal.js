import mongoose, { Schema } from 'mongoose';

const MealSchema = new Schema({
    dishes: {
        type: [Schema.Types.ObjectId],
        ref: 'Dish',
        required: true
    }
}, {
    timestamps: {
        createdAt,
        updatedAt
    }
})

export default mongoose.models.meal || mongoose.model('meal', MealSchema);