import { useState } from 'react';
import { api } from '../../convex/_generated/api';
// import { products } from '../data/products'
import { ProductComponent } from './ProductComponent'
import { useQuery } from "convex/react";
import { PaginationComponent } from './PaginationComponent';


export const ProductsList = () => {


    // const [currentPage, setCurrentPage] = useState(1);
    // const [productsPerPage, setPostsPerPage] = useState(10);
    // const sampleProducts = useQuery(api.sampleProducts.get);

    // const lastPostIndex = currentPage * productsPerPage;
    // const firstPostIndex = lastPostIndex - productsPerPage;

    // console.log(sampleProducts!.length + 'Cantidad total de productos')



    // const getProducts = async () => {
    //     return await useQuery(api.sampleProducts.get);
    // }


    // const totalPosts = getProducts().then((product) => { return product!.length });

    return (<>
        <div className='d-flex flex-wrap justify-content-center mt-4'>
            {/* {products.map((product) => (
            <ProductComponent key={product.id} {...product} />
        ))} */}

            {/* {sampleProducts?.map((product) => (
                <ProductComponent key={product._id} {...product} />
            ))} */}

        </div >
        {/* <PaginationComponent
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            setCurrentPage={setCurrentPage}
            totalPosts={2240}
        /> */}
    </>
    )
}
