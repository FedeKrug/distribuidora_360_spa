import { Link } from 'react-router-dom'
import { ProductsType } from '../data/products'



export const ProductComponent = ({ name, imgURL, price }: ProductsType) => {
    return (
        <Link className="card m-2 text-decoration-none "
            to='/producto'
            style={{ width: '18rem' }}
        >
            <img src={imgURL} className="card-img-top" alt="image" />
            <div className="card-body text-center ">
                <h5 className="card-title ">{name}</h5>
                <p className="card-text ">{price}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </Link>
    )
}
