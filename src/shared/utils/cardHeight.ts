export const getCardHeight = (start: string | null, end: string | null): string => {
  if (!start || !end) {
    return '25px';
  }

  const startDate = new Date(start);
  const endDate = new Date(end);

  const startHours = startDate.getHours();
  const startMinutes = startDate.getMinutes();

  const endHours = endDate.getHours();
  const endMinutes = endDate.getMinutes();

  const startInHours = startHours + startMinutes / 60;
  const endInHours = endHours + endMinutes / 60;

  const diffHours = endInHours - startInHours;

  const PIXELS_PER_HOUR = 70;
  const height = diffHours * PIXELS_PER_HOUR;

  return `${height}px`;
};