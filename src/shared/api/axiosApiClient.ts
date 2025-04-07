import { ApiClient, RequestConfig } from "./types";
import axios, { AxiosRequestConfig } from 'axios';

// Реализуем наш интерфейс на axios
export const createAxiosClient = (baseURL: string): ApiClient => {
    const client = axios.create({ baseURL });

    const mapConfig = (config?: RequestConfig): AxiosRequestConfig => ({
        headers: config?.headers,
        params: config?.params,
    });

    return {
        get: async <T>(url: string, config?: RequestConfig) => {
            const response = await client.get<T>(url, mapConfig(config));
            return response.data;
        },
        post: async <T>(url: string, data?: unknown, config?: RequestConfig) => {
            const response = await client.post<T>(url, data, mapConfig(config));
            return response.data;
        },
        // put: () => {},
        // delete: () => {},
    };
};