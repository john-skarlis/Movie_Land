import axios from "axios";
import {API_KEY} from "@/app/services/constants";

const FetchByImdbID = async (imdbID) => {

    try {
        const response = await axios.post('http://www.omdbapi.com/?apikey='+API_KEY+'&i=' + imdbID);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default FetchByImdbID;