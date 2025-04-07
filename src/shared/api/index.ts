import { createAxiosClient } from "./axiosApiClient";
// import { fetchApiClient } from "./fetchApiClient";

const BASE_URL = 'localhost:8000';

export const axiosApi = createAxiosClient(BASE_URL);
// export const fetchApi = fetchApiClient()