import { api } from '../../convex/_generated/api';
// import { products } from '../data/products'
import { ProductComponent } from './ProductComponent'
import { useQuery } from "convex/react";

export const ProductsList = () => {

    const sampleProducts = useQuery(api.sampleProducts.get);
    return (<div className='d-flex flex-wrap justify-content-center'>
        {/* {products.map((product) => (
            <ProductComponent key={product.id} {...product} />
        ))} */}
        <ul>
            {sampleProducts?.map((product) => (
                <ProductComponent key={product._id} {...product} />
            ))}
        </ul>

    </div >)
}
