import { query } from "./_generated/server";
import { asyncMap } from "./lib/relationships";

/*Funciones o metodos que se usaran en la base de datos de convex*/
// export const get = query(async ({ db, storage }) => {
//     console.log('Hello, this is db function')
//     return await db.query('sampleProducts').collect();
// });


export const get = query(async ({ db, storage }) => {
    const sampleProducts = await db.query("sampleProducts").collect();
    return await asyncMap(sampleProducts, async (product) => ({
        ...product,
        image: (await storage.getUrl(product.imageId)) ?? "",
    }));
});

