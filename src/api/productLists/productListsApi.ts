import axios from "axios";
const baseUrl = "http://localhost:3000";


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
        console.log(error)
    }

}

export const getProductList = async (id: number) => {
    try {
        const response = await axios.get(`/api/productLists/${id}`);
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

export const createNewProductList = async (token: any, body: any) => {
    const data = {
        title: body.title,
        photo_url: body.photo_url,
    }

    return new Promise((resolve, reject) => {
        return axios({
            url: `${baseUrl}/api/productLists`,
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            },
            data: data
        })
            .then(response => response)
            .then(json => {
                return resolve({
                    data: json.data
                });
            })
            .catch(err => {
                return reject(err.response)
            });
    });
}

export const updateProductList = async (id: number) => {
    try {
        const response = await axios.put(`/api/productLists/${id}`);
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

export const deleteProductList = async (id: number) => {
    try {
        const response = await axios.delete(`/api/productLists/${id}`);
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