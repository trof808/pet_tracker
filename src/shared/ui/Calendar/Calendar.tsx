import { JSX, useState } from 'react';
import styles from './Calendar.module.css';
import { EventCard } from '../EventCard/EventCard';
import { getCardHeight } from '../../utils/cardHeight';
import {
  EventCardStatus,
  StartDateTime,
  EndDateTime,
  TagType,
} from '../EventCard/EventCard';
import { TimeLine } from './components/TimeLine';

type Task = {
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
      startDateTime: '2025-03-17T04:00:00Z',
      endDateTime: '2025-03-17T06:00:00Z',
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
      endDateTime: '2025-03-17T12:00:00Z',
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

export const Calendar = (): JSX.Element => {
  const [tasks, setTasks] = useState(initialTasks.tasks);

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

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <div className={styles.allDaysTasks}>
          {allDayTasks.map((task) => (
            <EventCard
              key={task.id}
              id={task.id}
              status={task.status}
              cardTitle={task.cardTitle}
              tag={task.tag}
              startDateTime={task.startDateTime}
              endDateTime={task.endDateTime}
              height={getCardHeight(task.startDateTime, task.endDateTime)}
              onClick={handleTaskClick}
              onDone={handleTaskDone}
              onDelete={handleTaskDelete}
            />
          ))}
        </div>
        <div className={styles.divider} />
      </div>
      <TimeLine />
      {hours.map((hour) => {
        const slotTasks = tasks.filter((task) => {
          if (!task.startDateTime) return false;
          const eventHour = new Date(task.startDateTime).getHours();
          return eventHour === hour;
        });

        return (
          <div className={styles.timeSlot} key={hour}>
            <div className={styles.timeLabel}>
              {`${hour}`.padStart(2, '0')}:00
            </div>
            <div className={styles.eventContainer}>
              {slotTasks.map((task) => (
                <EventCard
                  key={task.id}
                  id={task.id}
                  status={task.status}
                  cardTitle={task.cardTitle}
                  tag={task.tag}
                  startDateTime={task.startDateTime}
                  endDateTime={task.endDateTime}
                  height={getCardHeight(task.startDateTime, task.endDateTime)}
                  onClick={handleTaskClick}
                  onDone={handleTaskDone}
                  onDelete={handleTaskDelete}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
