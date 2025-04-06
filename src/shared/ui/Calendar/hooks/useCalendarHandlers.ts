import { useCallback, useState } from 'react';
import { Task } from '../Calendar';
import { EventCardStatus } from '../../EventCard/EventCard';

type useCalendarHandlersReturn = {
  tasks: Task[];
  handleTaskClick: (id: string) => void;
  handleTaskDelete: (id: string) => void;
  handleTaskDone: (id: string) => void;
  allDayTasks: Task[];
};

export const useCalendarHandlers = (
  initialState: Task[]
): useCalendarHandlersReturn => {
  const [tasks, setTasks] = useState(initialState);

  const allDayTasks = tasks.filter(
    (task) => !task.startDateTime && !task.endDateTime
  );

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
