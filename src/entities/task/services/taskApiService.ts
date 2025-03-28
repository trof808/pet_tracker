import { ApiService } from "../../../shared/api/ApiService";

const TASK_API_URL = '/tasks';

class TaskApiService extends ApiService {

}

export const taskApiService = new TaskApiService(TASK_API_URL)