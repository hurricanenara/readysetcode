import axios from 'axios';

const instance = axios.create({
    baseURL: `https://burger-f8fbb-default-rtdb.firebaseio.com/`
});

export default instance;