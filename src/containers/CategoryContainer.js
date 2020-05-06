import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { getAllCategories } from "../api/ApiUtils";
import CategoryList from "../components/Categories/CategoryList";
import { appStrings } from '../resources/strings';

const CategoryHeadLine = styled.div`
    margin : 0 auto;
    margin: 5%;
    h4 {
        padding: 15px;
        color: purple;
        text-align: left;
        font-size: 24px;
        margin: 0;
    }
    p {
        min-height: 30px;
        padding: 15px;
        display: flex;
        flex-direction: row;
        border-bottom: 3px solid purple; 
        border-top: 3px solid silver;
        font-size: 20px;
        text-align: left;
    }

`;
/**
 * Container for the category list.
 * Connects and fetch data and passes to the List component for display.
 */
const CategoryContainer = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [categories, setCategories] = useState({ categories: [] });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllCategories();
                setCategories(data);
                setIsLoading(false);
            } catch (err) {
                setHasError(true);
            }
        };
        if (isLoading) {
            fetchData();
        }
    }, [isLoading]);

    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (!hasError)
        return (categories.length > 0 &&
            <>
                <CategoryHeadLine>
                    <h4>
                        {appStrings.category.headerText}
                    </h4>
                    <p> {appStrings.category.headerIntro}</p>
                </CategoryHeadLine>
                <CategoryList categories={categories}></CategoryList>
            </>
        );
};

export default CategoryContainer;
