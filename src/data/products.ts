import { Id } from "../../convex/_generated/dataModel";
//const fs = require("fs");
//const { exec } = require("child_process");

export type ProductsType = {
    _id?: Id<"sampleProducts">;
    _creationTime?: number;

    image?: string;
    precio: string;
    articulo: string;
    oferta?: string;
}

export type ProductosType = {
    title: string;
    price: number;
    id: number;
    image: string;
}

export const products: ProductosType[] = [
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 0,
        image: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 1,
        image: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 2,
        image: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 3,
        image: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 4,
        image: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 5,
        image: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 6,
        image: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 7,
        image: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 8,
        image: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 9,
        image: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 10,
        image: '../../public/images/Vasija2.jpg'
    },
    {
        title: 'Producto de prueba 1',
        price: 34,
        id: 11,
        image: '../../public/images/Vasija2.jpg'
    },


]

// const importProducts = (productsFile: any) =>
//     new Promise((resolve) => {
//         exec(`npx convex import products ${productsFile}`, resolve);
//     });

// const getUploadUrl = () =>
//     new Promise((resolve, reject) => {
//         exec(
//             "npx convex run --no-push images:getUploadUrl",
//             (error, stdout, stderr) => {
//                 if (error) {
//                     reject(error);
//                     return;
//                 }
//                 if (stderr) {
//                     reject(stderr);
//                     return;
//                 }
//                 resolve(stdout.trim().replace(/"/g, ""));
//             }
//         );
//     });
