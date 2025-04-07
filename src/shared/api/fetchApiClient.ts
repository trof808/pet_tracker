// export const fetchApiClient = () => {
//     return {
//         get: async <T>(url: string, config?: RequestConfig) => {
//             const response = await fetch({ method: 'GET' })
//             return response.data;
//         },
//         post: async <T>(url: string, data?: unknown, config?: RequestConfig) => {
//             const response = await client.post<T>(url, data, mapConfig(config));
//             return response.data;
//         },
//         // put: () => {},
//         // delete: () => {},
//     };
// }