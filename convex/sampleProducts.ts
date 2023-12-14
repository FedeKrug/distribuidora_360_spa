import { query } from "./_generated/server";
import { asyncMap } from "./lib/relationships";
import { useQuery } from "convex/react";
import { ProductsType } from '../src/data/products'
import { api } from './_generated/api';
/*Funciones o metodos que se usaran en la base de datos de convex*/
// export const get = query(async ({ db, storage }) => {
//     console.log('Hello, this is db function')
//     return await db.query('sampleProducts').collect();
// });
export type ProductSchemaType = {
    _creationTime: number;
    codigo: string;
    articulo: string;
    marca: string;
    oferta: string;
    precio: string;
    imageId: string;
}




export const get = query(async ({ db, storage }) => {
    const sampleProducts = await db.query("sampleProducts").collect();
    return await asyncMap(sampleProducts, async (product) => ({
        ...product,
        image: (await storage.getUrl(product.imageId)) ?? "",
    }));
});

