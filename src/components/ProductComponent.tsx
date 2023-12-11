import { Link } from 'react-router-dom'
import { ProductsType } from '../data/products'
import '../styles/styles.css'


export const ProductComponent = ({ articulo: title, image, precio: price }: ProductsType) => {
    return (
        <Link className="card m-2 text-decoration-none product"
            to='/producto'
            style={{ width: '18rem' }}
        >
            <img src={image} className="card-img-top" alt="image" />
            <div className="card-body text-center ">
                <h5 className="card-title ">{title}</h5>
                <p className="card-text ">{price}$</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </Link>
    )
}
