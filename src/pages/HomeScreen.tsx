import React from 'react'
import { Slider } from '../components/Slider'
import { ProductsList } from '../components/ProductsList'

export const HomeScreen = () => {
    return (
        <div>
            <Slider />
            <ProductsList />
        </div>
    )
}
