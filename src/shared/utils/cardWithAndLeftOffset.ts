import { Task } from '../ui/Calendar/Calendar';

const WIDTH_PERCENT = 100;

const timeOverlap = (taskA: Task, taskB: Task): boolean => {
  if (
    !taskA.startDateTime ||
    !taskA.endDateTime ||
    !taskB.endDateTime ||
    !taskB.startDateTime
  )
    return false;

  const startA = new Date(taskA.startDateTime);
  const endA = new Date(taskA.endDateTime);
  const startB = new Date(taskB.startDateTime);
  const endB = new Date(taskB.endDateTime);

  return startA < endB && startB < endA;
};

export const getCardWidthAndLeftOffset = (
  currentTask: Task,
  allTasks: Task[]
): { width: string; left: string } => {
  const overlapTasks = allTasks.filter((task) =>
    timeOverlap(task, currentTask)
  );

  if (overlapTasks.length <= 1) {
    return { width: '100%', left: '0' };
  }

  overlapTasks.sort((a, b) => {
    if (!a.startDateTime || !b.startDateTime) return 0;
    return (
      new Date(a.startDateTime).getTime() - new Date(b.startDateTime).getTime()
    );
  });

  const taskIndex = overlapTasks.findIndex((task) => task.id === currentTask.id);
  const countTasks = overlapTasks.length;

  const wTask = WIDTH_PERCENT / countTasks;
  const leftOffset = taskIndex * wTask;

  return {
    width: `${wTask}%`,
    left: `${leftOffset}%`,
  };
};
