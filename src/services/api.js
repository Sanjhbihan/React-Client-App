import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/api/films?order=asc&by=singer";

export const apiclient = {
    get: async() => {
        const response = await axios.get(BASE_URL);
        return response;
    }
}