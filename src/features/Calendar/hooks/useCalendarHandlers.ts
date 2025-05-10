import { useCallback } from 'react';
import {
  EndDateTime,
  EventCardStatus,
  StartDateTime,
  TagType,
} from '../../../entities/events/ui/EventCard/EventCard';
import { useGetEvents } from '../../../entities/events/hooks/useGetEvents';
import { useSelector } from 'react-redux';
import { useUpdateEvent } from '../../../entities/events/hooks/useUpdateEvent';
import { getEventInfo } from '../../../entities/events/hooks/useGetEventInfo';

export type Task = {
  id: number;
  status: EventCardStatus;
  cardTitle: string;
  tag: TagType;
  startDateTime: StartDateTime;
  endDateTime: EndDateTime;
};

type useCalendarHandlersReturn = {
  tasks: Task[];
  handleTaskClick: (id: number) => void;
  handleTaskDelete: (id: number) => void;
  handleTaskDone: (id: number) => void;
  allDayTasks: Task[];
};

export const useCalendarHandlers = (): useCalendarHandlersReturn => {
  const currentDate = useSelector(
    ({ filters }: { filters: { date: string } }) => filters.date
  );
  const tasks = useGetEvents({ date: currentDate });
  const allDayTasks = tasks.filter(
    (task) => !task.startDateTime && !task.endDateTime
  );

  const { updateTask } = useUpdateEvent();

  const handleTaskDone = useCallback(async (id: number): Promise<void> => {
    const taskInfo = await getEventInfo({ task_id: id });

    updateTask({
      id,
      data: {
        ...taskInfo,
        status:
          taskInfo.status === EventCardStatus.Done
            ? EventCardStatus.Backlog
            : EventCardStatus.Done,
      },
    });
  }, [updateTask]);

  const handleTaskClick = useCallback((id: number): void => {
    console.log(`Задача #${id} кликнута`);
  }, []);

  const handleTaskDelete = useCallback(async (id: number): Promise<void> => {
    const taskInfo = await getEventInfo({ task_id: id });

    updateTask({
      id,
      data: {
        ...taskInfo,
        status:
          taskInfo.status === EventCardStatus.Canceled
            ? EventCardStatus.Backlog
            : EventCardStatus.Canceled,
      },
    });
  }, [updateTask]);

  return {
    tasks,
    handleTaskClick,
    handleTaskDelete,
    handleTaskDone,
    allDayTasks,
  };
};
