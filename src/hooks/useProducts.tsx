import React, { useState, useEffect } from 'react'
import { productsApi } from '../api/productsApi';
import { fetchAllProducts } from '../helpers/fetchAllProducts';


export const useProducts = () => {
    const [isLoading, setisLoading] = useState(true);




    fetchAllProducts();
    useEffect(() => {

    }, [])


    return {
        isLoading,
        fetchAllProducts
    }
}
