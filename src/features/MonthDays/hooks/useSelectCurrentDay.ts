import { eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FiltersDate, setDate } from '../../../store/slices/filtersSlice';

export type useSelectCurrentDayReturn = {
  formattedDates: { day: number; weekday: string }[],
  selectedDay: number,
  handleDateClick: (day: number) => void
}

export const useSelectCurrentDay = (): useSelectCurrentDayReturn => {
  const currentDate = useSelector(({ filters }: { filters: { date: FiltersDate }}) => filters.date);
  const dispatch = useDispatch();

  const [yearStr, monthStr, dayStr] = currentDate.split('-');
  const selectedDay = parseInt(dayStr);

  const dates = eachDayOfInterval({
    start: startOfMonth(new Date(currentDate)),
    end: endOfMonth(new Date(currentDate)),
  });
  const formattedDates = dates.map((date) => ({
    day: parseInt(format(date, 'd')),
    weekday: format(date, 'EEEEEE', { locale: ru }),
  }));

  const handleDateClick = (day: number) => {
    const newDayStr = day.toString().padStart(2, '0');
    const newDate = `${yearStr}-${monthStr}-${newDayStr}`;
    dispatch(setDate(newDate));
  };

  return { formattedDates, selectedDay, handleDateClick };
};