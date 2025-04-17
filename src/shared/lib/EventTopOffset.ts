import { PIXELS_PER_HOUR } from "./cardHeight";

export const ONE_MINUTE_IN_SECONDS = 60;
export const ONE_HOUR_IN_MINUTES = 60;

export const PIXELS_PER_MINUTE = PIXELS_PER_HOUR / ONE_MINUTE_IN_SECONDS;

const OFFSET_TOP_BORDER = 77;

export const getEventTopOffset = (start: string | null): string => {
  if (!start) return `0`;
  const date = new Date(start);
  const minutesSinceMidnight = date.getHours() * ONE_HOUR_IN_MINUTES + date.getMinutes();
  const topOffset = OFFSET_TOP_BORDER + minutesSinceMidnight * PIXELS_PER_MINUTE;
  return `${topOffset}px`
};
