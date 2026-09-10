import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e1fa48a12e2943b9b3af7bfb34da1097'
    }
})