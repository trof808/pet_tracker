import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RequestEventData } from '../services/eventApiTypes';
import { eventApi } from '../services/eventsApiClient';

type PayloadData = { id: number; data: RequestEventData };
type useUpdateEventReturn = {
  updateTask: (data: PayloadData) => void;
};

export const useUpdateEvent = (): useUpdateEventReturn => {
  const updateEvent = async ({ id, data }: PayloadData) => {
    return await eventApi.updateTask(id, data);
  };

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['updateEvent'],
    mutationFn: updateEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
    onError: (error) => {
      console.error('Error updating event:', error);
    },
  });

  return { updateTask: mutate };
};
