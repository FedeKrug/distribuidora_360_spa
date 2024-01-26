import { useState } from 'react';
import { api } from '../../convex/_generated/api';
import { ProductComponent } from './ProductComponent'
import { useQuery } from "convex/react";


const productsPerPage = 10;

export const ProductsList = () => {

    const [currentPage, setCurrentPage] = useState(0);
    const sampleProducts = useQuery(api.sampleProducts.get);


    const filteredProducts = () => {

        return sampleProducts?.slice(currentPage, currentPage + productsPerPage);

    }

    const nextPage = () => {
        if (sampleProducts!.length > currentPage + productsPerPage)
            setCurrentPage((current: number) => (current + 1));
    }
    const previousPage = () => {
        setCurrentPage((current: number) => {
            if (current > 0) {
                return current - 1;
            }
            else {
                return 0;
            }
        }

        )
    }
    return (<>
        <div className='d-flex flex-wrap justify-content-center mt-4'>

            {filteredProducts()?.map((product) => (
                <ProductComponent key={product._id} {...product} />
            ))}

        </div >
        <div className='d-flex justify-content-center my-2 flex-fill'>
            {
                (currentPage > 0)
                &&
                <button
                    className='btn btn-primary'
                    onClick={previousPage}
                >
                    «
                </button>
            }
            &nbsp;
            <button
                className='btn btn-primary'
                onClick={nextPage}
            >
                »
            </button>
        </div>
    </>
    )
}
