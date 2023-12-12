import { useContext } from 'react';
import { api } from '../../convex/_generated/api';
import { PaginationContext } from '../context/PaginationContext';
// import { products } from '../data/products'
import { ProductComponent } from './ProductComponent'
import { useQuery } from "convex/react";

export const ProductsList = () => {

    const { productsPerPage } = useContext(PaginationContext)

    const sampleProducts = useQuery(api.sampleProducts.get);

    return (<div className='d-flex flex-wrap justify-content-center mt-4'>
        {/* {products.map((product) => (
            <ProductComponent key={product.id} {...product} />
        ))} */}

        {sampleProducts?.map((product) => (
            <ProductComponent key={product._id} {...product} />
        ))}


    </div >)
}
