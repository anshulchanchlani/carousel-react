import axios from 'axios'
const API_KEY = "9656065-a4094594c34f9ac14c7fc4c39";
const API_URL = "https://pixabay.com/api/";
let keyword = "beautiful+landscape";
let type = "photo";

export const getImages = function () {
    return axios.get(`${API_URL}?key=${API_KEY}&q=${keyword}&image_type=${type}`)
        .then((results) => {
            return results.data.hits;
        })
        .catch((err) => {
            return new Error(err)
        })
}
