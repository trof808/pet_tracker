import { Task } from "../ui/Calendar/Calendar";

const WIDTH = 100;

export const cardWidth = (tasks: Task[]): number => tasks.length > 0 ? WIDTH / tasks.length : WIDTH;