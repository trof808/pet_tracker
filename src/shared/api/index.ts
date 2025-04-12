import { createAxiosClient } from "./axiosApiClient";

const BASE_URL = 'http://localhost:8000';

export const axiosApi = createAxiosClient(BASE_URL); // возвращает get, post, put, и тд