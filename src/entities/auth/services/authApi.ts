import { axiosApi } from "../../../shared/api";
import { ApiClient } from "../../../shared/api/types";

const authApiService = (apiClient: ApiClient) => {
    return {
        signIn: async (body: { email: string, password: string }) => {
            return await apiClient.post('/sign_in', body);
        },
        signUp: async (body: {email: string, password: string}) => {
            return await apiClient.post('/sign_up', body);
        },
    }
}

export const authApi = authApiService(axiosApi);