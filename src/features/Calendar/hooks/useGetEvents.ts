import { useQuery } from '@tanstack/react-query';
import { Task } from './useCalendarHandlers';
import { eventApi } from '../../../entities/events/services/eventsApiClient';


// Больше относится к entities/events/hooks
// export const useGetEvents = ({ date }: Filters): Task[] => {
export const useGetEvents = (date: string): Task[] => {
  const getData = async () => {
    return await eventApi.getTasks(date);
  };

  const { data } = useQuery({
    queryKey: ['events', date],
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
