import { api } from "../../convex/_generated/api"
import { useQuery } from "convex/react";

export const productsApi = async () => {
    const resp = await useQuery(api.sampleProducts.get);

    console.log('resp: ' + { resp });
}