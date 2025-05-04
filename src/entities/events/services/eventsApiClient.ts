import { axiosApi } from '../../../shared/api';
import { ApiClient } from '../../../shared/api/types';
import { RequestDate, RequestEventData } from './eventApiTypes';

const eventApiService = (ApiClient: ApiClient) => {
  return {
    getTasks: async (day: RequestDate) => {
      return await ApiClient.get('/api/v1/tasks', {
        params: { day },
      });
    },
    createTask: async (data: RequestEventData) => {
      return await ApiClient.post('/api/v1/tasks', data);
    }
  };
};

export const eventApi = eventApiService(axiosApi);
