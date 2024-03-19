import { useState } from 'react'
import Axios from 'axios';

const baseUrl = "http://localhost:3000/api/";

export const useFetch = (urlData: string) => {
    const [data, setData] = useState([]);

    const getData = () => {
        console.log(baseUrl + urlData)
        Axios.get(baseUrl + urlData)
            .then((response) => {
                console.log({ response })
                setData(response.data);
            })
        return data;
    }

    return {
        getData,
        ...data,
        data,

    }
}
