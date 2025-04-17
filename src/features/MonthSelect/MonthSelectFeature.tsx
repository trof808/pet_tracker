import { JSX, useState } from 'react';
import { MonthSelect } from '../../entities/calendar/ui/MonthSelect/MonthSelect';

// как я понял, мы тут в дальнейшем будем работать с хранилищем и передавать детишкам через пропсы monthTitle и onChange
// пока что используем заглушку в виде useState

export const MonthSelectFeature = (): JSX.Element => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const monthTitle = selectedMonth;
  const onChange = (newMonth: string) => setSelectedMonth(newMonth);

  return <MonthSelect monthTitle={monthTitle} onChange={onChange} />;
};
