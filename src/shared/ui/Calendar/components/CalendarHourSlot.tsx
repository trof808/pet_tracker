import { JSX } from 'react';
import styles from '../Calendar.module.css';
import { getCardHeight } from '../../../utils/cardHeight';
import { EventCard } from '../../EventCard/EventCard';
import { Task } from '../Calendar';
import { cardWidth } from '../../../utils/cardWidth';

type CalendarHourSlotProps = {
  hour: number;
  tasks: Task[];
  handleTaskClick: (id: string) => void;
  handleTaskDone: (id: string) => void;
  handleTaskDelete: (id: string) => void;
};

export const CalendarHourSlot = ({
  hour,
  tasks,
  handleTaskClick,
  handleTaskDone,
  handleTaskDelete,
}: CalendarHourSlotProps): JSX.Element => {
  return (
    <div className={styles.timeSlot} key={hour}>
      <div className={styles.timeLabel}>{`${hour}`.padStart(2, '0')}:00</div>
      <div className={styles.eventContainer}>
        {tasks.map((task) => (
          <div
          key={task.id}
          style={{
            width: `${cardWidth(tasks)}%`,
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
              compact={tasks.length > 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
