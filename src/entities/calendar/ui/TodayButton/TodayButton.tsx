import { JSX } from 'react';
import { Button } from '../../../../shared/ui/Button/Button';

export const TodayButton = ({ onClick }: {onClick: () => void}): JSX.Element => {
  return <Button onClick={onClick} />;
};
