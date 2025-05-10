import { JSX } from "react";
import { TodayButton } from "../../entities/calendar/ui/TodayButton/TodayButton";
import { setDate } from "../../entities/calendar/store/filtersSlice";
import { useDispatch } from "react-redux";
import { format } from "date-fns";

export const TodayButtonFeature = (): JSX.Element => {
  const todayDate = format(new Date(), 'yyyy-MM-dd');
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setDate(todayDate));
  };

  return (
    <TodayButton onClick={onClick} />
  );
};