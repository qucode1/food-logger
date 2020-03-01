/* 
stool okay? yes no
which stool problem
how bad is it? light, medium, strong
additional problems? bloody, ... allow user to add custom conditions here?
*/

const date = new Date();
const user = 'userID';

const mealName = 'Spaghetti Bolognese';
const mealOriginType = ['homemade', 'TV dinner', 'restaurant'];
// allow custom
const mealOriginStore = 'rewe';
// allow custom
const mealOriginRestaurant = 'chinese restaurant dragon';
// allow custom
const mealCook = 'me';
const mealIngredients = [
    'ingredientVariantID',
    'spaghetti, tomatoes, onions, ground beef'
];
const mealVariants = ['mealVariantID'];

const stoolQuality = [0, 1, 2]; // 0 perfect, 2 worst
const stoolProblem = ['constipation', 'diarrhea'];
const additionalStoolProblems = ['bloody', 'custom'];

const ingredientName = 'spaghetti';
const ingredientOrigin = 'aldi';
const ingredientBrand = 'golden delicious';
const ingredientProperties = ['bio', 'gluten-free'];
const ingredientVariants = ['ingredientVariantID'];

const meal = {
    user,
    mealName,
    mealVariants
};

const mealVariant = {
    date,
    user,
    meal,
    mealOriginType,
    mealCook,
    mealOriginStore,
    mealOriginRestaurant,
    mealIngredients
};

const stool = {
    date,
    user,
    stoolQuality,
    stoolProblem,
    additionalStoolProblems
};

const ingredient = {
    user,
    ingredientName,
    ingredientVariants
};

const ingredientVariant = {
    date,
    user,
    ingredient,
    ingredientOrigin,
    ingredientBrand,
    ingredientProperties
};
