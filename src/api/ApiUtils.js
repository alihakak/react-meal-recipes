import axios from 'axios';
import { normalizeCategories } from './ApiNormalizers';

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
    axios.get(
        'https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
            c: categoryName
        }
    })
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}