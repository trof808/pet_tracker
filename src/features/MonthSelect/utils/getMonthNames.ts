import { format, setMonth } from "date-fns";
import { ru } from "date-fns/locale";

export const getMonthNames = (date: Date): string[] => {
  return Array.from({ length: 12 }, (_, i) =>
    format(setMonth(date, i), 'LLLL', { locale: ru })
  );
};
