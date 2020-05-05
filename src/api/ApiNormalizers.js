export const normalizeCategories = resp => {
    if (!resp.categories) return null;
    return resp.categories.map(cat => {
        return {
            id: cat.idCategory,
            title: cat.strCategory,
            image: cat.strCategoryThumb,
            description: cat.strCategoryDescription
        };
    });
};

export const normalizeMeals = resp => {
    if (!resp.meals) return null;
    return resp.meals.map(meal => {
        return {
            id: meal.idMeal,
            title: meal.strMeal,
            image: meal.strMealThumb,
        };
    });
};

export const normalizeMealRecipe = resp => {
    if (!resp.meals) return null;
    return resp.meals.map(meal => {
        let ingredients = [];
        for (let i = 1; i <= 20; i++) {
            if (!meal[`strIngredient${i}`]) continue;
            ingredients.push({
                ingredient: meal[`strIngredient${i}`],
                measurement: meal[`strMeasure${i}`]
            });
        }

        return {
            ingredients,
            mealId: meal.idMeal,
            title: meal.strMeal,
            category: meal.strCategory,
            origin: meal.strArea,
            instructions: meal.strInstructions,
            thumbnail: meal.strMealThumb,
            tags: meal.strTags,
            videoSrc: meal.strYoutube
        };
    });
}