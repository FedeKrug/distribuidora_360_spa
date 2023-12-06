import { query } from "./_generated/server";

/*Funciones o metodos que se usaran en la base de datos de convex*/
export const get = query(async ({ db, storage }) => {
    console.log('Hello, this is db function')
    return await db.query('sampleProducts').collect();
});

