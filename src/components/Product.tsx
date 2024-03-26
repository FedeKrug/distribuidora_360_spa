import React from 'react'
import { Link } from 'react-router-dom'
import { ProductsType } from './ProductsList'



export const Product = ({ id, imageSrc, nombreProducto, precioVenta, category }: ProductsType) => {
    return (
        <Link to={`producto/${id}`} key={id} className="relative">
            <div>
                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                    <img
                        src={imageSrc}
                        alt={nombreProducto}
                        className="w-full h-full object-center object-cover"
                    />
                </div>
                <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">{nombreProducto}</h3>
                    <p className="mt-1 text-sm text-gray-500">{category}</p>
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                        {(precioVenta) ? `$ ${precioVenta}` : "A CONSULTAR PRECIO"}
                    </p>
                </div>
            </div>
            {/* <div className="mt-6">
                <button
                    className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                    Agregar al carrito<span className="sr-only">, {name}</span>
                </button>
            </div> */}
        </Link>
    )
}
