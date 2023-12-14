import { ProductSchemaType } from "../../convex/sampleProducts";

export const productsApi = async (productsData: ProductSchemaType[]) => {

    const productsArr: ProductSchemaType[] = await productsData.map((product: ProductSchemaType) => {
        console.log({ product })
        return {
            ...product
        }
    }
    )
    return productsArr;
}