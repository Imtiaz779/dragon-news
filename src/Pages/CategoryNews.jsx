import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryNews = () => {
    const { data } = useLoaderData();
console.log("news data:", data);
    
    return (
        <div>
           
        </div>
    );
};

export default CategoryNews;