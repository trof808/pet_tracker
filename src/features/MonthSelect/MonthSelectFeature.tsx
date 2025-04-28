import { JSX } from 'react';
import { MonthSelect } from '../../entities/calendar/ui/MonthSelect/MonthSelect';
import { useSelectMonth } from './hooks/useSelectMonth';

export const MonthSelectFeature = (): JSX.Element => {
  const { monthTitle, onChange, monthNames } = useSelectMonth();

  return <MonthSelect monthTitle={monthTitle} onChange={onChange} monthNames={monthNames} />;
};
