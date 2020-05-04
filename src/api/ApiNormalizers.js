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