import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setTags } from '../../../store/slices/filtersSlice';
import { useEffect } from 'react';
import { useGetEvents } from '../../../entities/events/hooks/useGetEvents';

type FiltersTag = {
  title: string;
  color: string;
};

type FiltersStore = {
  filters: {
    date: string;
    month?: string;
    tags?: FiltersTag[];
  };
};

const tagsMap = new Map();

export const useGetTags = (): FiltersTag[] => {
  const currentDate = useSelector(({ filters }: FiltersStore) => filters.date);
  const tasksData = useGetEvents(currentDate);
  const dispatch = useDispatch();

  const allTags = tasksData.map((task) => task.tag);

  allTags.forEach((tag) => {
    tagsMap.set(tag.title, tag);
  });

  const unqiueTags = Array.from(tagsMap.values());

  useEffect(() => {
    dispatch(setTags(unqiueTags));
  }, [unqiueTags, dispatch, currentDate]);

  return unqiueTags;
};
