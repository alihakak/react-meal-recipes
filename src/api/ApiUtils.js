import axios from 'axios';
import { normalizeCategories, normalizeMeals, normalizeMealRecipe } from './ApiNormalizers';
import { shuffleArray } from '../utils';

/**
 * Connect to Category API and fetch all the categories 
 * Logs the error if happens
 */
export const getAllCategories = async () => {
    // Get All Gategories
    return await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(categories => {
        return shuffleArray(normalizeCategories(categories.data));
    }).catch(function (error) {
        // handle error
        console.log('API: Error occured in fetching categories: ', error);
    });

}

/**
 * Get Meals by Category Name
 * @param {categoryName} categoryName 
 */
export const getMealsByCategoryName = async (categoryName) => {
    return await axios.get(
        'https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
            c: categoryName
        }
    })
        .then(meals => {
            // handle success
            return shuffleArray(normalizeMeals(meals.data));
        })
        .catch(function (error) {
            // handle error
            console.log('API: Error occured in fetching meals: ', error);
        })
}

/**
 * Get Full recipe for a Meal
 * @param {mealId} mealId 
 */
export const getRecipeByMealId = async (mealId) => {
    // Get Category by Name
    return await axios.get(
        'https://www.themealdb.com/api/json/v1/1/lookup.php', {
        params: {
            i: mealId
        }
    })
        .then(meals => {
            // handle success
            return normalizeMealRecipe(meals.data)
        })
        .catch(function (error) {
            // handle error
            console.log('API: Error occured in fetching recipe: ', error);
        })
}