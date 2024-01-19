import axios from "axios";
import {API_KEY} from "@/app/services/constants";

const FetchSearch = async (text, type) => {

    let path;
    if (type !== null && type !== '') {
        path = "&s=" + text + "&type=" + type;
    } else {
        path = "&s=" + text;
    }

    try {
        const response = await axios.post('http://www.omdbapi.com/?apikey=' + API_KEY + path);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default FetchSearch;