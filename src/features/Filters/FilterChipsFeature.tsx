import { JSX } from 'react';
import { useGetTags } from './hooks/useGetTags';
import { Chip } from '../../shared/ui/Chip/Chip';

export const FilterChipsFeature = (): JSX.Element => {
  const tags = useGetTags();

  return (
    <>
      {tags.map((tag) => (
        <Chip color={tag.color} title={tag.title} key={tag.title} />
      ))}
    </>
  );
};
