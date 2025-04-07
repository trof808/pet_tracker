import { axiosApi, fetchApi } from "../../../shared/api";
import { ApiClient } from "../../../shared/api/types";

const authApiService = (apiClient: ApiClient) => {
    return {
        signIn: () => {
            // apiClient.post()
        },
        signUp: () => {
            // apiClient.post()
        },
    }
}

export const authApi = authApiService(axiosApi);
// export const authApi = authApiService(fetchApi);