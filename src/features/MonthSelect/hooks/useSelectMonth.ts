import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FiltersDate, setDate } from '../../../entities/calendar/ui/model/filtersSlice';
import { format, getDate, getYear } from 'date-fns';
import { ru } from 'date-fns/locale';
import { getMonthNames } from '../utils/getMonthNames';

type UseSelectMonnthReturn = {
  monthTitle: string;
  onChange: (newMonth: string) => void;
  monthNames: string[];
};

export const useSelectMonth = (): UseSelectMonnthReturn => {
  const isoDate = useSelector(({ filters }: { filters: { date: FiltersDate } }) => filters.date);
  const dispatch = useDispatch();

  const dateObj = new Date(isoDate);
  const y = getYear(dateObj);
  const d = getDate(dateObj);

  const monthNames = getMonthNames(dateObj);

  const monthTitle = format(dateObj, 'LLLL', { locale: ru });

  const onChange = (newMonth: string) => {
    const newMonthIndex = monthNames.indexOf(newMonth);
    const newDate = new Date(y, newMonthIndex, d);
    const newIso = format(newDate, 'yyyy-MM-dd');
    if (newMonth === monthTitle) return;
    dispatch(setDate(newIso));
  };

  return { monthTitle, onChange, monthNames };
};
