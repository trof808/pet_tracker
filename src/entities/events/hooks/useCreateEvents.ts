import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RequestEventData } from '../services/eventApiTypes';
import { eventApi } from '../services/eventsApiClient';

type useCreateEventsReturn = {
  mutate: (body: RequestEventData) => void;
  isPending: boolean;
};

export const useCreateEvents = (): useCreateEventsReturn => {
  const postEvent = async (data: RequestEventData) => {
    return await eventApi.createTask(data);
  };

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['createTask'],
    mutationFn: postEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
    onError: (error) => {
      console.error(error, 'Упс, ошибка c каким-то кодом (позже обработаем)');
    },
  });
  return { mutate, isPending };
};
