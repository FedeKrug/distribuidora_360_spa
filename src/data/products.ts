import { Id } from "../../convex/_generated/dataModel";

export type ProductsType = {
    _id?: Id<"sampleProducts">;
    _creationTime?: number;
    imageId?: string;
    image?: string;
    precio: string;
    articulo: string;
    oferta?: string;
}

export type ProductosType = {
    title: string;
    price: number;
    id: number;
    imageId: string;
}

export const products: ProductosType[] = [
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 0,
        imageId: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 1,
        imageId: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 2,
        imageId: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 3,
        imageId: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 4,
        imageId: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 5,
        imageId: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 6,
        imageId: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 7,
        imageId: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 8,
        imageId: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 9,
        imageId: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 10,
        imageId: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 11,
        imageId: '../../public/images/Vasija2.jpg'
    },


]