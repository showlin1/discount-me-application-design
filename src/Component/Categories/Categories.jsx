import React from 'react';
import CategoryBox from './CategoryBox';
import { categories } from './CategoriesData';

const Categories = () => {
    return (
        <div className='pt-4 flex items-center justify-between overflow-x-auto'>
            {categories.map(item => (
                <CategoryBox key={item.label} label={item.label} icon={item.icon} />
            ))}
        </div>
    );
};

export default Categories;