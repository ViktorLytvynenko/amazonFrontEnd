import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://amazon-backend-f5d87ff76ea2.herokuapp.com/api'
});