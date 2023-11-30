import { ProductsType } from '../data/products'



export const ProductComponent = ({ name, imgURL, price }: ProductsType) => {
    return (
        <div className='m-5'>
            <img src={imgURL} alt={name} style={{ width: 270, height: 270 }} />
            <div className='text-center'>
                <h4 className='fw-bold'>{name}</h4>
                <span className='fw-semibold'>{price}</span>
            </div>
        </div>
    )
}
