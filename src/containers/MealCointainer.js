import React, { useState, useEffect } from 'react';
import { getMealsByCategoryName } from "../api/ApiUtils";
import MealList from "../components/Meals/MealList";

const MealContainer = ({ categoryName }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [meals, setMeals] = useState({ meals: [] });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMealsByCategoryName(categoryName);
                setMeals(data);
                setIsLoading(false);
            } catch (err) {
                setHasError(true);
            }
        };
        if (isLoading) {
            fetchData();
        }
    },[isLoading, categoryName]);
 
    if (isLoading) {
        return <div>Loading...</div>
    }
    else if(!hasError)
        return (meals && meals.length > 0 &&
            <MealList meals={meals} mealCategory={categoryName}></MealList>
        );
};

export default MealContainer;