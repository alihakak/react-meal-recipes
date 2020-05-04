import axios from 'axios';
import { normalizeCategories, normalizeMeals } from './ApiNormalizers';

export const getAllCategories = async () => {
    // Get All Gategories
    return await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(categories => {
        return normalizeCategories(categories.data);
    }).catch(function (error) {
        // handle error
        console.log('API: Error occured in fetching categories: ', error);
    });

}

export const getMealsByCategoryName = async (categoryName) => {
    // Get Category by Name
    return await axios.get(
        'https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
            c: categoryName
        }
    })
        .then(meals => {
            // handle success
            return normalizeMeals(meals.data)
        })
        .catch(function (error) {
            // handle error
            console.log('API: Error occured in fetching meals: ', error);
        })

}