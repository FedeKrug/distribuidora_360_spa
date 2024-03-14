import axios from "axios"
const baseUrl = "http://localhost:3000"

axios.defaults.baseURL = baseUrl;




/*--------------------logged_users-----------------*/

export const getAllLoggedUsers = async () => {
    try {
        const response = await axios.get("/api/logged_users");
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
/*----------------------------products_tablelist------------------------- */

export const getAllProducts = async () => {
    try {
        const response = await axios.get("/api/products_tablelist");
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