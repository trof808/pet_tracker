import { eachDayOfInterval, endOfMonth, format, getDate, getMonth, getYear, startOfMonth } from 'date-fns';
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
  const isoDate = useSelector(({ filters }: { filters: { date: FiltersDate }}) => filters.date);
  const dispatch = useDispatch();

  const dateObj = new Date(isoDate);
  const year = getYear(dateObj);
  const month = getMonth(dateObj);
  const day = getDate(dateObj);
  
  const selectedDay = day;

  const dates = eachDayOfInterval({
    start: startOfMonth(dateObj),
    end: endOfMonth(dateObj),
  });

  const formattedDates = dates.map((date) => ({
    day: getDate(date),
    weekday: format(date, 'EEEEEE', { locale: ru }),
  }));

  const handleDateClick = (day: number) => {
    const newDate = new Date(year, month, day);
    const newIso = format(newDate, 'yyyy-MM-dd');
    if (day === selectedDay) return;
    dispatch(setDate(newIso));
  };

  return { formattedDates, selectedDay, handleDateClick };
};