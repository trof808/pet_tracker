import { JSX } from 'react';
import styles from './Calendar.module.css';
import { TimeLine } from './ui/TimeLine';
import { CalendarHeader } from './ui/CalendarHeader';
import { CalendarHourSlot } from './ui/CalendarHourSlot';
import { useCalendarHandlers } from './hooks/useCalendarHandlers';
import { CalendarEvents } from './ui/CalendarEvents';

export const Calendar = (): JSX.Element => {
  const hours = Array.from({ length: 24 }, (_, hour) => hour);

  const {
    tasks,
    handleTaskClick,
    handleTaskDelete,
    handleTaskDone,
    allDayTasks,
  } = useCalendarHandlers();

  return (
    <>
      <div className={styles.calendarContainer}>
        <CalendarHeader
          allDayTasks={allDayTasks}
          handleTaskClick={handleTaskClick}
          handleTaskDelete={handleTaskDelete}
          handleTaskDone={handleTaskDone}
        />
        <TimeLine />
        {hours.map((hour) => (
          <CalendarHourSlot key={hour} hour={hour} />
        ))}
        <CalendarEvents
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDelete={handleTaskDelete}
          handleTaskDone={handleTaskDone}
        />
      </div>
    </>
  );
};
