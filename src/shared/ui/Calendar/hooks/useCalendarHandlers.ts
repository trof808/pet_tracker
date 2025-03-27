import { useState } from 'react';
import { Task } from '../Calendar';
import { EventCardStatus } from '../../EventCard/EventCard';

type useCalendarHandlersReturn = {
  tasks: Task[];
  handleTaskClick: (id: string) => void;
  handleTaskDelete: (id: string) => void;
  handleTaskDone: (id: string) => void;
  hours: number[];
  allDayTasks: Task[];
};

export const useCalendarHandlers = (
  initialState: Task[]
): useCalendarHandlersReturn => {
  const [tasks, setTasks] = useState(initialState);

  const hours = Array.from({ length: 24 }, (_, hour) => hour);
  const allDayTasks = tasks.filter(
    (task) => !task.startDateTime && !task.endDateTime
  );

  const handleTaskDone = (id: string): void => {
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
  };

  const handleTaskClick = (id: string): void => {
    console.log(`Задача #${id} кликнута`);
  };

  const handleTaskDelete = (id: string): void => {
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
  };

  return {
    tasks,
    handleTaskClick,
    handleTaskDelete,
    handleTaskDone,
    hours,
    allDayTasks,
  };
};
