import { query } from "./_generated/server";
import { asyncMap } from "./lib/relationships";
import { useQuery } from "convex/react";
import { api } from './_generated/api';


/*Funciones o metodos que se usaran en la base de datos de convex*/
// export const get = query(async ({ db, storage }) => {
//     console.log('Hello, this is db function')
//     return await db.query('sampleProducts').collect();
// });




export const get = query(async ({ db, storage }) => {
    const tools = await db.query("tools").collect();
    return await asyncMap(tools, async (productTool) => ({
        ...productTool,
        image: (await storage.getUrl(productTool.imageId)) ?? "",
    }));
});

