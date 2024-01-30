import axios from "axios"
const baseUrl = "http://localhost:3000"

axios.defaults.baseURL = baseUrl;


export const getAllProductLists = async () => {
    try {
        const response = await axios.get("/api/productLists");
        if (response.status === 200) {
            const { data } = response;
            console.log({ data })
            return data;
        }
        else return null;
    }
    catch (error) {

    }

}

export const updateProductList = async (productList: any) => {
    try {
        const response = await axios.post("/api/productLists", productList);
        if (response.status === 200) {
            const { data } = response;
            console.log({ data })
            return data;
        }
        else return null;
    } catch (error) {
        console.log(error)
    }

}

export const deleteProductList = async (productList: any) => {
    try {
        const response = await axios.delete("/api/productLists", productList);
        if (response.status === 200) {
            const { data } = response;
            console.log({ data })
            //return data;
        }
        else return null;
    } catch (error) {
        console.log(error)
    }
}

/*--------------------logged_users-----------------*/

export const getAllLoggedUsers = async () => {
    try {
        const response = await axios.get("/api/logged");
        if (response.status === 200) {
            const { data } = response;
            console.log({ data })
            return data;
        }
        else return null;
    }
    catch (error) {

    }

}