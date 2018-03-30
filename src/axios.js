import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://nutrition-ce711.firebaseio.com/'
});

export default instance;