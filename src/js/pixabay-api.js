import axios from "axios"

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '53564240-a8c4c5fb04a0c541f79bb8ed2';

export async function getImagesByQuery(query){
try{
    const response = await axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 15,
            page: 1
        },
    });
    return response.data;
}catch(error){
    throw error
}
}