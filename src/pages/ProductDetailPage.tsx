import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductsType } from '../data/products';




export const ProductDetailPage = ({ articulo, precio }: ProductsType) => {

    console.log({ articulo, precio })
    const { productId } = useParams();
    console.log({ productId })

    return (
        <div>

        </div>
    )
}
