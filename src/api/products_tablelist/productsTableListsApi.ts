import axios from "axios";
const baseUrl = "http://localhost:3000/api/products_tablelist/";

axios.defaults.baseURL = baseUrl;

export const getAllProducts = async () => {
    try {
        const response = await axios.get("/");
        if (response.status === 200) {
            const { data } = response;
            console.log({ data })
            return data;
        }
        else return null;
    }
    catch (error) {
        console.log(error)
    }


}

export const getProduct = async (id: number) => {
    try {
        const response = await axios.get(`/${id}`);
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

export const createNewProduct = async (body: any) => {
    const data = {
        title: body.title,
        file: body.file,
    }

    try {
        const response = await axios.post(`/`, data);
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

export const updateProduct = async (id: number) => {
    try {
        const response = await axios.post(`/${id}`);
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

export const deleteProduct = async (id: number) => {
    try {
        const response = await axios.delete(`/${id}`);
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