import axios from "axios";
import {API_KEY} from "@/app/services/constants";

const FetchByType = async (type) => {

    try {
        const response = await axios.post('http://www.omdbapi.com/?apikey='+API_KEY+'&s=talk&type='+type);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default FetchByType;