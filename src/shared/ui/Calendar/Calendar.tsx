import { JSX } from 'react';
import styles from './Calendar.module.css';
import {
  EventCardStatus,
  StartDateTime,
  EndDateTime,
  TagType,
} from '../EventCard/EventCard';
import { TimeLine } from './components/TimeLine';
import { CalendarHeader } from './components/CalendarHeader';
import { CalendarHourSlot } from './components/CalendarHourSlot';
import { useCalendarHandlers } from './hooks/useCalendarHandlers';

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
      id: '1',
      status: EventCardStatus.Backlog,
      cardTitle: 'Тех встреча. Обсуждение рефакторинга',
      tag: { title: 'Работа', color: 'blue' },
      // startDateTime: '2025-03-17T04:00:00Z',
      // endDateTime: '2025-03-17T06:00:00Z',
      startDateTime: '2025-03-17T11:20:00Z',
      endDateTime: '2025-03-17T12:00:00Z',
    },
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
  ],
};

export const Calendar = ({tasks: tasksProps}: CalendarData): JSX.Element => {
  const hours = Array.from({ length: 24 }, (_, hour) => hour);
  const tasksData = tasksProps || initialTasks.tasks;

  const {
    tasks,
    handleTaskClick,
    handleTaskDelete,
    handleTaskDone,
    allDayTasks,
  } = useCalendarHandlers(tasksData);

  return (
    <div className={styles.calendarContainer}>
      <CalendarHeader
        allDayTasks={allDayTasks}
        handleTaskClick={handleTaskClick}
        handleTaskDelete={handleTaskDelete}
        handleTaskDone={handleTaskDone}
      />
      <TimeLine />
      {hours.map((hour) => {
        const slotTasks = tasks.filter((task) => {
          if (!task.startDateTime) return false;
          const eventHour = new Date(task.startDateTime).getHours();
          return eventHour === hour;
        });

        return (
          <CalendarHourSlot
            key={hour}
            hour={hour}
            tasks={slotTasks}
            handleTaskClick={handleTaskClick}
            handleTaskDelete={handleTaskDelete}
            handleTaskDone={handleTaskDone}
          />
        );
      })}
    </div>
  );
};
