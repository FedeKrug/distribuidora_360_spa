import { Product } from "./Product";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";


export type ProductsType = {
  id: string;
  nombreProducto: string;
  marcaProducto: string;
  imageSrc?: string;
  precioVenta?: string;
  description?: string;
  category?: "Ferretería" | "Jardinería" | "Electricidad" | "Sanitarios" | "Ofertas" | "Todos";
  idCategory?: number;

  //TODO: Definir las subcategorias con los chicos...
  subCategory?: string;
}


// export const products: ProductsType[] = [
//   {
//     id: "1",
//     name: 'A un producto real',
//     color: 'White and black',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
//     imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
//     price: '180.000',
//     category: "Ferretería"
//   },
//   {
//     id: "2",
//     name: 'Zip Tote Basket',
//     color: 'White and black',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
//     imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
//     price: '14.000',
//     category: "Jardinería"
//   },
//   {
//     id: "3",
//     name: 'Zip Tote Basket',
//     color: 'White and black',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
//     imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
//     price: '11.840',
//     category: "Electricidad"
//   },
//   {
//     id: "4",
//     name: 'Zip Tote Basket',
//     color: 'White and black',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
//     imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
//     price: '1.040',
//     category: "Ferretería"
//   },
//   {
//     id: "5",
//     name: 'Zip Tote Basket',
//     color: 'White and black',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
//     imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
//     price: '9.140',
//     category: "Ofertas"
//   },
//   {
//     id: "6",
//     name: 'Zip Tote Basket',
//     color: 'White and black',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
//     imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
//     price: '1.450',
//     category: "Todos"
//   },
//   {
//     id: "7",
//     name: 'Zip Tote Basket',
//     color: 'White and black',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
//     imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
//     price: '1.540',
//     category: "Todos"
//   },
//   {
//     id: "8",
//     name: 'Zip Tote Basket',
//     color: 'White and black',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
//     imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
//     price: '91.040',
//     category: "Todos"
//   },
// ]



export const ProductsList = () => {

  const { data, getData } = useFetch("productos");
  useEffect(() => {
    getData();
    console.log({ data })
  }, [])
  return (
    <div className="bg-white container">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product: ProductsType, index) => (
            <Product {...product} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
