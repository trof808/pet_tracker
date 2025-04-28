import { useCallback, useEffect, useState } from 'react';
import { EndDateTime, EventCardStatus, StartDateTime, TagType } from '../../../entities/events/ui/EventCard/EventCard';
import { useGetEvents } from './useGetEvents';
import { useSelector } from 'react-redux';

export type Task = {
  id: string;
  status: EventCardStatus;
  cardTitle: string;
  tag: TagType;
  startDateTime: StartDateTime;
  endDateTime: EndDateTime;
};

type useCalendarHandlersReturn = {
  tasks: Task[];
  handleTaskClick: (id: string) => void;
  handleTaskDelete: (id: string) => void;
  handleTaskDone: (id: string) => void;
  allDayTasks: Task[];
};

export const useCalendarHandlers = (): useCalendarHandlersReturn => {
  const currentDate = useSelector(({ filters }: { filters: {date: string}}) => filters.date);
  const tasksData = useGetEvents(currentDate);

  const [tasks, setTasks] = useState<Task[]>([]);  

  const allDayTasks = tasks.filter(
    (task) => !task.startDateTime && !task.endDateTime
  );

  useEffect(() => {
      setTasks(tasksData);
  }, [tasksData]);

  // Можно в useCallback
  const handleTaskDone = useCallback((id: string): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === EventCardStatus.Done
                  ? EventCardStatus.Backlog
                  : EventCardStatus.Done,
            }
          : task
      )
    );
  }, []);

  // Можно в useCallback
  const handleTaskClick = useCallback((id: string): void => {
    console.log(`Задача #${id} кликнута`);
  }, []);

  // Можно в useCallback
  const handleTaskDelete = useCallback((id: string): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === EventCardStatus.Canceled
                  ? EventCardStatus.Backlog
                  : EventCardStatus.Canceled,
            }
          : task
      )
    );
  }, []);

  return {
    tasks,
    handleTaskClick,
    handleTaskDelete,
    handleTaskDone,
    allDayTasks,
  };
};
