import { JSX } from 'react';
import styles from '../Calendar.module.css';;
import { EventCard } from '../../../entities/events/ui/EventCard/EventCard';
import { Task } from '../lib/hooks/useCalendarHandlers';
import { getCardHeight } from '../../../entities/events/ui/EventCard/utils/cardHeight';

type CalendarHeaderProps = {
  allDayTasks: Task[];
  handleTaskClick: (id: number) => void;
  handleTaskDelete: (id: number) => void;
  handleTaskDone: (id: number) => void;
};

export const CalendarHeader = ({
  allDayTasks,
  handleTaskClick,
  handleTaskDelete,
  handleTaskDone,
}: CalendarHeaderProps): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className={styles.allDayTasks}>
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
  );
};
