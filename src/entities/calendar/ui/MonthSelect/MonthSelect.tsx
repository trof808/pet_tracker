import { JSX } from 'react';
import { Select } from '../../../../shared/ui/Select/Select';

type MonthSelectProps = {
  monthTitle: string;
  onChange: (month: string) => void;
};

const getMonthsNames = () => {
  return Array.from({ length: 12 }, (_, i) =>
    new Date(2025, i, 1).toLocaleString('default', { month: 'long' })
  );
};

const monthsNames = getMonthsNames();

export const MonthSelect = ({
  monthTitle,
  onChange,
}: MonthSelectProps): JSX.Element => {
  return (
    <Select selectedValue={monthTitle} options={monthsNames} onChange={onChange} />
  );
};