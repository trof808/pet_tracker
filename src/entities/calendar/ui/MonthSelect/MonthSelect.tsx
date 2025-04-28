import { JSX } from 'react';
import { Select } from '../../../../shared/ui/Select/Select';

type MonthSelectProps = {
  monthTitle: string;
  onChange: (month: string) => void;
  monthNames: string[];
};

export const MonthSelect = ({
  monthTitle,
  onChange,
  monthNames,
}: MonthSelectProps): JSX.Element => {
  return (
    <Select selectedValue={monthTitle} options={monthNames} onChange={onChange} />
  );
};