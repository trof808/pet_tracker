// import { useQuery } from '@tanstack/react-query';
import { eventApi } from '../services/eventsApiClient';

// type useGetEventInfoResponse = {
//   status: string;
//   card_title: string;
//   tag: {
//     title: string;
//     color: string;
//   }; 
//   start_date_time: string;
//   end_date_time: string;
//   id: number;
//   owner_id: number;
// };

// export const useGetEventInfo = ({ task_id }: { task_id: number }): useGetEventInfoResponse => {

//   const getEventInfo =  async () => {
//     return await eventApi.getInfo(task_id);
//   }

//   const { data } = useQuery({
//     queryKey: ['eventInfo', task_id],
//     queryFn: getEventInfo,
//     enabled: Boolean(task_id),
//   });

//   return data;
// };

export type EventInfo = {
  status: string
  card_title: string
  tag: {
    title: string
    color: string
  }
  start_date_time: string
  end_date_time: string
  id: number
  owner_id: number
}

export const getEventInfo = async ({ task_id }: { task_id: number }): Promise<EventInfo> => {
  const response = await eventApi.getInfo(task_id);
  return response;
}
