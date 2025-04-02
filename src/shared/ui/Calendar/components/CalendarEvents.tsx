import { JSX } from 'react';
import { Task } from '../Calendar';
import styles from '../Calendar.module.css';
import { EventCard } from '../../EventCard/EventCard';
import { getCardHeight } from '../../../utils/cardHeight';
import { getEventTopOffset } from '../../../utils/EventTopOffset';
import { getCardWidthAndLeftOffset } from '../../../utils/cardWithAndLeftOffset';

export type CalendarEventsProps = {
  tasks: Task[];
  handleTaskClick: (id: string) => void;
  handleTaskDelete: (id: string) => void;
  handleTaskDone: (id: string) => void;
};

export const CalendarEvents = ({
  tasks,
  handleTaskClick,
  handleTaskDelete,
  handleTaskDone,
}: CalendarEventsProps): JSX.Element => {
  const filteredTasks = tasks.filter(task => task.startDateTime !== null);
  return (
    <div className={styles.eventContainer}>
      {tasks.filter(task => task.startDateTime !== null).map((task) => {
        const { width, left } = getCardWidthAndLeftOffset(task, tasks);
        return (
          <div
            key={task.id}
            // className={styles.eventPos} я бы класс создал, чтобы не использовать инлайн стили. что можно достать - достал бы.
            style={{
              width: width,
              top: getEventTopOffset(task.startDateTime),
              position: 'absolute',
              left: left,
            }}
          >
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
              compact={width !== '100%'}
            />
          </div>
        );
      })}
    </div>
  );
};
