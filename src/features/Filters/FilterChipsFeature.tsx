import { JSX } from 'react';
import { TagChip } from '../../entities/chip/TagChip';

export const FilterChipsFeature = (): JSX.Element => {
  const tag = {
    color: 'red',
    title: 'Личное',
  };

  return (
    <TagChip color={tag.color} title={tag.title} />
  )
};
