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