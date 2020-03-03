/* 
stool okay? yes no
which stool problem
how bad is it? light, medium, strong
additional problems? bloody, ... allow user to add custom conditions here?
*/

const date = new Date();
const user = 'userID';

const dishName = 'Spaghetti Bolognese';
const dishOriginType = ['homemade', 'TV dinner', 'restaurant'];
// allow custom
const dishOriginStore = 'rewe';
// allow custom
const dishOriginRestaurant = 'chinese restaurant dragon';
// allow custom
const dishCook = 'me';
const dishIngredients = [
    'ingredientVariantID',
    'spaghetti, tomatoes, onions, ground beef'
];
const dishVariants = ['dishVariantID'];

const stoolQuality = [0, 1, 2]; // 0 perfect, 2 worst
const stoolProblem = ['constipation', 'diarrhea'];
const additionalStoolProblems = ['bloody', 'custom'];

const ingredientName = 'spaghetti';
const ingredientOrigin = 'aldi';
const ingredientBrand = 'golden delicious';
const ingredientProperties = ['bio', 'gluten-free'];
const ingredientVariants = ['ingredientVariantID'];

const dishes = ['Linsensuppe', 'Brötchen']

const meal = {
    user,
    date,
    dishes
}

const dish = {
    user,
    dishName,
    dishVariants
};

const dishVariant = {
    date,
    user,
    dish,
    dishOriginType,
    dishCook,
    dishOriginStore,
    dishOriginRestaurant,
    dishIngredients
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
