import React from 'react'
import { categories } from '../data/categories'
import { CategoryCard } from './CategoryCard'

export const CategoriesList = () => {
    return (
        <div className='d-flex flex-wrap justify-content-center my-4'>

            {categories.map((category, index) => (
                <CategoryCard {...category} key={index} />
            ))}

        </div>
    )
}
