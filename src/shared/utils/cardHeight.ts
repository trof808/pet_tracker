// написать тесты на эту функцию
// 1. проверить когда ровно час
// 2. Проверить когда 2 часа
// 3. Проверить когда нет вообще времени
// 4. Проверить, когда нет хотя бы одного времени
// 5. Проверить, когда 1 час 10 минут
// Пример чистой функции

export const EVENT_CARD_SMALL = 25;
export const  PIXELS_PER_HOUR = 70;

export const getCardHeight = (start: string | null, end: string | null): string => {
  if (!start || !end) {
    return `${EVENT_CARD_SMALL}px`;
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

  const height = diffHours * PIXELS_PER_HOUR;

  return `${height}px`;
};