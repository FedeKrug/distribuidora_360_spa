import axios from "axios"
const baseUrl = "http://localhost:3000"

axios.defaults.baseURL = baseUrl;




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