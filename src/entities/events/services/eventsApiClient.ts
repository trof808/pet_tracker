import { axiosApi } from '../../../shared/api';
import { ApiClient } from '../../../shared/api/types';

const eventApiService = (ApiClient: ApiClient) => {
  return {
    getTasks: async (day: string) => {
      return await ApiClient.get('/api/v1/tasks', {
        params: { day },
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
    },
  };
};

export const eventApi = eventApiService(axiosApi);
