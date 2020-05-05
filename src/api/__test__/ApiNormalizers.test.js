import {
    normalizeCategories,
    normalizeMeals,
  } from '../ApiNormalizers';

describe("ApiNormalizer", () => {
    /**
     * Test | Normalize Category
     */
    describe("normalizeCategories", () => {
      test("it returns an array of categories", () => {
        //Arrange 
        const payload = {
          categories: [
            {
              idCategory: "100",
              strCategory: "CategoryName",
              strCategoryThumb: "CategoryImage",
              strCategoryDescription: "CategoryDesc"
            }
          ]
        };
        //Act
        const actual = normalizeCategories(payload);
        //Asert
        expect(actual[0].id).toEqual("100");
        expect(actual[0].title).toEqual("CategoryName");
        expect(actual[0].image).toEqual("CategoryImage");
        expect(actual[0].description).toEqual("CategoryDesc");
      });
  
      test(" should return null if there is no category", () => {
        const actual = normalizeCategories({});
        expect(actual).toEqual(null);
      });
    }); 

    /**
     * Test | normalizeMeals 
     */
    describe("normalizeMeals", () => {
        test("it returns an array of meals", () => {
        //Arrange 
          const payload = {
            meals: [
              {
                idMeal: "200",
                strMeal: "MealName",
                strMealThumb: "MealImage",
              }
            ]
          };
        //Act
          const actual = normalizeMeals(payload);
        //Assert
          expect(actual[0].id).toEqual("200");
          expect(actual[0].title).toEqual("MealName");
          expect(actual[0].image).toEqual("MealImage");
        });
    
        test(" should return null if there is no meal", () => {
          const actual = normalizeMeals({});
          expect(actual).toEqual(null);
        });
      }); 
  });
  