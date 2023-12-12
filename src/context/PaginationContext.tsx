import { createContext, useState } from 'react';
import { api } from '../../convex/_generated/api';
import { useQuery } from "convex/react";

type PaginationProviderType = {
    children: any;
}

type IPaginationProviderType = {
    totalPosts: number;
    productsPerPage: number;
    setCurrentPage: (val: number) => void;
    currentPage: number;
    //currentPosts: any[];
}

const defaultValue: IPaginationProviderType = {
    totalPosts: 0,
    productsPerPage: 10,
    setCurrentPage: () => { },
    currentPage: 1,
    // currentPosts: []
};

export const PaginationContext = createContext(defaultValue);

export const PaginationProvider = ({ children }: PaginationProviderType) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setPostsPerPage] = useState(10);

    const lastPostIndex = currentPage * productsPerPage;
    const firstPostIndex = lastPostIndex - productsPerPage;

    const productsData = async () => { return (await useQuery(api.sampleProducts.get)) };
    console.log({ productsData })
    const totalPosts = productsData!.length;

    // const {} = productsData;
    //  const currentPosts = productsData!.slice(firstPostIndex, lastPostIndex);
    // const currentPosts = 


    const value: IPaginationProviderType = {
        productsPerPage,
        setCurrentPage,
        currentPage,
        // currentPosts,
        totalPosts,
    }

    return (
        <PaginationContext.Provider value={value}>
            {children}
        </PaginationContext.Provider>
    )
}

