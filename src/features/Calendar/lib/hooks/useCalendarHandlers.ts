import { useCallback, useState } from 'react';
import { EndDateTime, EventCardStatus, StartDateTime, TagType } from '../../../../entities/events/ui/EventCard/EventCard';

export type Task = {
  id: string;
  status: EventCardStatus;
  cardTitle: string;
  tag: TagType;
  startDateTime: StartDateTime;
  endDateTime: EndDateTime;
};

type CalendarData = {
  tasks: Task[];
};

const initialTasks: CalendarData = {
  tasks: [
    {
      id: '2',
      status: EventCardStatus.Done,
      cardTitle: 'Заплатить за аренду квартиры',
      tag: { title: '', color: 'red' },
      startDateTime: null,
      endDateTime: null,
    },
    {
      id: '3',
      status: EventCardStatus.Backlog,
      cardTitle: 'День рождения друга',
      tag: { title: '', color: 'black' },
      startDateTime: null,
      endDateTime: null,
    },
    {
      id: '7',
      status: EventCardStatus.Backlog,
      cardTitle: 'Обед с клиентом',
      tag: { title: 'Работа', color: 'green' },
      startDateTime: '2025-03-17T21:10:00Z',
      endDateTime: '2025-03-17T23:40:00Z',
    },
    {
      id: '1',
      status: EventCardStatus.Backlog,
      cardTitle: 'Тех встреча. Обсуждение рефакторинга',
      tag: { title: 'Работа', color: 'blue' },
      // startDateTime: '2025-03-17T04:00:00Z',
      // endDateTime: '2025-03-17T06:00:00Z',
      startDateTime: '2025-03-17T11:20:00Z',
      endDateTime: '2025-03-17T12:30:00Z',
    },
    {
      id: '4',
      status: EventCardStatus.Backlog,
      cardTitle: 'Обед с клиентом',
      tag: { title: 'Работа', color: 'green' },
      startDateTime: '2025-03-17T11:00:00Z',
      endDateTime: '2025-03-17T12:20:00Z',
    },
    {
      id: '5',
      status: EventCardStatus.Backlog,
      cardTitle: 'Прогулка с собакой',
      tag: { title: 'Личное', color: 'orange' },
      startDateTime: '2025-03-17T18:00:00Z',
      endDateTime: '2025-03-17T19:00:00Z',
    },
    {
      id: '6',
      status: EventCardStatus.Backlog,
      cardTitle: 'Тех встреча. Обсуждение рефакторинга',
      tag: { title: 'Работа', color: 'blue' },
      startDateTime: '2025-03-17T04:30:00Z',
      endDateTime: '2025-03-17T06:20:00Z',
    },
  ],
};

type useCalendarHandlersReturn = {
  tasks: Task[];
  handleTaskClick: (id: string) => void;
  handleTaskDelete: (id: string) => void;
  handleTaskDone: (id: string) => void;
  allDayTasks: Task[];
};

export const useCalendarHandlers = (): useCalendarHandlersReturn => {
  const [tasks, setTasks] = useState(initialTasks.tasks);

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
