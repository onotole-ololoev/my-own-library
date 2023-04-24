import axios from "axios";
export const instance = axios.create({
    baseURL: 'https://books-server-w4ku.onrender.com',
})