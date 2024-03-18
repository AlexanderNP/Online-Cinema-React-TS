import axios from "axios";

export const API_URL = 'https://videocdn.tv/api';

const $api = axios.create({
    baseURL: API_URL
});

export default $api;