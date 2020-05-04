import React, { useState, useEffect } from 'react';
import { getAllCategories } from "../api/ApiUtils";
import CategoryList from "../components/Categories/CategoryList";

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
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }
    else
        return (categories.length > 0 &&
            <CategoryList categories={categories}></CategoryList>
        );
};

export default CategoryContainer;
