import { Link } from 'react-router-dom'
import { ProductsType } from '../data/products'
import '../styles/styles.css'


export const ProductComponent = ({ _id, articulo: title, image, precio: price }: ProductsType) => {
    return (
        <div className='product w-100 d-flex align-items-center' style={{ height: "250px", marginBottom: "3px" }}>
            <Link className='col-8 d-flex justify-content-around flex-fill text-decoration-none' to={`/buscador/${_id}`}>
                <img src={image} alt="img" height={100} />
                <div className='row col-8 text-start'>
                    <h5 className='product__title'>{title}</h5>
                    <p className='product__text'>${price}</p>
                </div>
            </Link>
        </div>
    )
}
