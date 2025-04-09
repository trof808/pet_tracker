import { JSX } from 'react';
import styles from '../Calendar.module.css';
import { EventCard } from '../../../entities/events/ui/EventCard/EventCard';
import { getCardHeight } from '../../../shared/lib/cardHeight';
import { getEventTopOffset } from '../../../shared/lib/EventTopOffset';
import { getCardWidthAndLeftOffset } from '../../../shared/lib/cardWithAndLeftOffset';
import { Task } from '../lib/hooks/useCalendarHandlers';


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
      {filteredTasks.map((task) => {
        const { width, left } = getCardWidthAndLeftOffset(task, tasks);
        return (
          <div
            key={task.id}
            className={styles.eventPosition}
            style={{
              width: width,
              top: getEventTopOffset(task.startDateTime),
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
