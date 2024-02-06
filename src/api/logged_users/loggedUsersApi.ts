import axios from "axios";
const baseUrl = "http://localhost:3000/api/logged/";

axios.defaults.baseURL = baseUrl;

export const getAllLoggedUsers = async () => {
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

export const getLoggedUser = async (id: number) => {
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

export const createNewLoggedUser = async (token: any, body: any) => {
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

export const updateLoggedUser = async (id: number) => {
    try {
        const response = await axios.put(`/${id}`);
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

export const deleteLoggedUser = async (id: number) => {
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