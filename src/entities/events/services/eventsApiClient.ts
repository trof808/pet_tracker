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
    },
    updateTask: async (task_id: number, data: RequestEventData) => {
      return await ApiClient.put(`/api/v1/tasks/${task_id}/edit`, data);
    },
    getInfo: async (task_id: number) => {
      return await ApiClient.get(`/api/v1/tasks/${task_id}/info`);
    },
  };
};

export const eventApi = eventApiService(axiosApi);
