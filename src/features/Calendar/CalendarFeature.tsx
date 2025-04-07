import { JSX } from "react";
import styles from "./Calendar.module.css";
import { TimeLine } from "./components/TimeLine";
import { CalendarHeader } from "./components/CalendarHeader";
import { CalendarHourSlot } from "./components/CalendarHourSlot";
import { useCalendarHandlers } from "./hooks/useCalendarHandlers";
import { CalendarEvents } from "./components/CalendarEvents";
import { CalendarToolBar } from "./components/CalendarToolBar";
import { CalendarDateSlider } from "./components/CalendarDateSlider/CalendarDateSlider";

// Это фича календаря. Самостоятельная сущность, которую если вызвать, то она все сделает сама
// и данные получит и список задач отрендерит

// initialTasks я перенест внутрь хука, чтобы упростить. Вообще это временные файлы
export const Calendar = (): JSX.Element => {
  const hours = Array.from({ length: 24 }, (_, hour) => hour);
  // const tasksData = tasksProps || initialTasks.tasks;

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
