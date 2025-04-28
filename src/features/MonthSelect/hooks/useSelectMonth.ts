import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FiltersDate, setDate } from "../../../store/slices/filtersSlice";

type UseSelectMonnthReturn = {
  monthTitle: string,
  onChange: (newMonth: string) => void,
  monthNames: string[]  
}

export const useSelectMonth = (): UseSelectMonnthReturn => {
  const isoDate = useSelector(({ filters }: { filters: { date: FiltersDate } }) => filters.date);
  const dispatch = useDispatch();

  const [y, m, d] = isoDate.split('-');

  const monthNames = Array.from({ length: 12 }, (_, i) =>
    new Date(2025, i, 1).toLocaleString('default', { month: 'long' })
  );

  const monthIndex = parseInt(m) - 1;
  const monthTitle = monthNames[monthIndex];

  const onChange = (newMonth: string) => {
    const newMonthId = monthNames.indexOf(newMonth);
    dispatch(setDate(`${y}-${(newMonthId + 1).toString().padStart(2, '0')}-${d}`));
  };
  
  return { monthTitle, onChange, monthNames };
};