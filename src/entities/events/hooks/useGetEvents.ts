import { useQuery } from '@tanstack/react-query';
import { Task } from '../../../features/Calendar/hooks/useCalendarHandlers';
import { eventApi } from '../services/eventsApiClient';

type Filters = {
  date: string;
};

export const useGetEvents = ({ date }: Filters): Task[] => {
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
