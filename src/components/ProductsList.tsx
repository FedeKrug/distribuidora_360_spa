import { products } from '../data/products'
import { ProductComponent } from './ProductComponent'

export const ProductsList = () => {
    return (<div className='d-flex flex-wrap justify-content-center'>
        {products.map((product) => (
            <ProductComponent key={product.id} {...product} />
        ))}


    </div >)
}
