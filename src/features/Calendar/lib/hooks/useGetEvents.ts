import { useQuery } from '@tanstack/react-query';
import { eventApi } from '../../../../entities/events/services/eventsApiClient';
import { Task } from './useCalendarHandlers';


export const useGetEvents = (): Task[] => {
  const getData = async () => {
    return await eventApi.getTasks(new Date().toISOString().split('T')[0]);
  };

  const { data } = useQuery({
    queryKey: ['events'],
    queryFn: getData,
    select: (data) => {
      if (Array.isArray(data)) {
        return data.map((event) => ({
          id: event.id,
          status: event.status,
          cardTitle: event.card_title,
          tag: event.tag,
          startDateTime: event.start_date_time,
          endDateTime: event.end_date_time,
        }));
      }
    },
  });

  return data ?? [];
};
