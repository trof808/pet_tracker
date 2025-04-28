import { JSX } from 'react';
import { useGetTags } from './hooks/useGetTags';
import { TagChip } from '../../entities/chip/TagChip';

export const FilterChipsFeature = (): JSX.Element => {
  const tags = useGetTags();

  return (
    <>
      {tags.map((tag) => (
        <TagChip color={tag.color} title={tag.title} key={tag.title} />
      ))}
    </>
  );
};
