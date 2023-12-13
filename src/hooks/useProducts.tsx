import React, { useState, useEffect } from 'react'
import { productsApi } from '../api/productsApi';

export const useProducts = () => {
    const [isLoading, setisLoading] = useState(true);

    productsApi();
    useEffect(() => {
    }, [])


    return {
        isLoading

    }
}
