import axios from 'axios';
import {API_KEY} from "@/app/services/constants";

const FetchHome = async () => {

    try {
        const response = await axios.post('http://www.omdbapi.com/?apikey=' +API_KEY+'&s=tes');
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default FetchHome;