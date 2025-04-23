import { JSX } from "react";
import { TodayButton } from "../../entities/calendar/ui/TodayButton/TodayButton";
import { useSelector } from "react-redux";
import { FiltersDate, setDate } from "../../store/slices/filtersSlice";
import { useDispatch } from "react-redux";


// тут в дальнейшем опять же будет связь с хранилищем
// при клике на кнопку, будет перемещение в слайдере к сегодняшнему числу и, скорее всего, обновление состояния 

export const TodayButtonFeature = (): JSX.Element => {
  const todayDate = new Date().toISOString().split('T')[0]; 
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setDate(todayDate));
  };

  return (
    <TodayButton onClick={onClick} />
  );
};