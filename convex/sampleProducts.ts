import { query } from "./_generated/server";

export const get = query(async ({ db, storage }) => {
    return await db.query('sampleProducts').collect();
});

