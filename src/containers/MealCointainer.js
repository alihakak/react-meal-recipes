import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { getMealsByCategoryName } from "../api/ApiUtils";
import MealList from "../components/Meals/MealList";

const HealHadline = styled.div`
    min-height:80px;
    padding: 30px;
    display: flex;
    flex-direction: row;
    border-bottom: 3px solid red;
    margin: 5%;
    border-top: 3px solid silver;
    font-size: 18px;
    text-align: left;
`;

const MealContainer = ({ categoryName, categoryDesc }) => {
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
    }, [isLoading, categoryName]);

    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (!hasError)
        return (meals && meals.length > 0 &&
            <>
            <HealHadline>{categoryDesc}</HealHadline>
            <MealList meals={meals}
                mealCategory={categoryName}
                description={categoryDesc} >
            </MealList>
            </>
        );
};

export default MealContainer;