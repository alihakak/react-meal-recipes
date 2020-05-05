import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { getRecipeByMealId } from "../api/ApiUtils";
import Recipe from "../components/Recipe/Recipe";

const RecipeHeadLine = styled.div`
    margin : 0 auto;
    margin: 5%;
    h4 {
        padding: 15px;
        color: #4CBB17;
        text-align: left;
        font-size: 24px;
        margin: 0;
    }
    p {
        min-height:50px;
        padding: 15px;
        display: flex;
        flex-direction: row;
        border-bottom: 3px solid #4CBB17; 
        border-top: 3px solid silver;
        font-size: 18px;
        text-align: left;
    }

`;

const RecipeContainer = ({ mealId }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [mealRecipe, setMealRecipe] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getRecipeByMealId(mealId);
                setMealRecipe(data && data[0]);
                setIsLoading(false);
            } catch (err) {
                setHasError(true);
            }
        };
        if (isLoading) {
            fetchData();
        }
    }, [isLoading, mealId]);

    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (!hasError) {
        return (mealRecipe &&
            <>
                <RecipeHeadLine>
                    <h4>
                    {mealRecipe.title} | {mealRecipe.category} 
                    </h4>
                    <p> Origin: {mealRecipe.origin}  - Tags: {mealRecipe.tags} </p>
                </RecipeHeadLine>
                <Recipe mealRecipe={mealRecipe}></Recipe>
            </>
        );
    }
};

export default RecipeContainer;