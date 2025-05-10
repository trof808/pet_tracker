import { JSX } from 'react';
import styles from '../Calendar.module.css';
import { EventCard } from '../../../../entities/events/ui/EventCard/EventCard';
import { getCardHeight } from '../../../../entities/events/ui/EventCard/utils/cardHeight';
import { getEventTopOffset } from '../../../../entities/events/ui/EventCard/utils/EventTopOffset';
import { getCardWidthAndLeftOffset } from '../../../../entities/events/ui/EventCard/utils/cardWithAndLeftOffset';
import { Task } from '../../../../features/Calendar/hooks/useCalendarHandlers';

export type CalendarEventsProps = {
  tasks: Task[];
  handleTaskClick: (id: number) => void;
  handleTaskDelete: (id: number) => void;
  handleTaskDone: (id: number) => void;
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
