import { axiosApi } from "../../../shared/api";
import { ApiClient } from "../../../shared/api/types";
import { CheckAuthResponse } from "./authApiTypes";

const authApiService = (apiClient: ApiClient) => {
    return {
        signIn: async (body: { email: string, password: string }) => {
            return await apiClient.post('/sign_in', body);
        },
        signUp: async (body: {email: string, password: string}) => {
            return await apiClient.post('/sign_up', body);
        },
        checkAuth: async (): Promise<CheckAuthResponse> => {
            return await apiClient.get('/check_auth');
        }
    }
}

export const authApi = authApiService(axiosApi);