import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    sampleProducts: defineTable({
        codigo: v.string(),
        articulo: v.string(),
        marca: v.string(),
        oferta: v.string(),
        precio: v.string(),
        imageId: v.string(),
    }),
});