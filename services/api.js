import Axios from 'axios';

let urls = {
    production: 'https://api.zacharymyers.com/'
}

const api = Axios.create({
    baseURL: urls.production,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;