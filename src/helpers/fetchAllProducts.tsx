import React from 'react'
import { api } from '../../convex/_generated/api';
import { useQuery } from "convex/react";
import { productsApi } from '../api/productsApi'

export const fetchAllProducts = async () => {
    const productsData = useQuery(api.sampleProducts.get);
    const resp = await productsApi(productsData!);
    const data = resp;
    console.log(data);
    return data;
}
