import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '10172a9b79474d338c9eb3c83dca073b'
    }
})