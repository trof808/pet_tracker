import { useSelector } from 'react-redux';
import { useGetEvents } from '../../Calendar/lib/hooks/useGetEvents';
import { useDispatch } from 'react-redux';
import { setTags } from '../../../store/slices/filtersSlice';
import { useEffect } from 'react';

type FiltersTag = {
  title: string;
  color: string;
};

type FiltersStore = {
  filters: {
    date: string;
    month?: string;
    tags?: Array<FiltersTag>;
  };
};

export const useGetTags = (): Array<FiltersTag> => {
  const currentDate = useSelector(({ filters }: FiltersStore) => filters.date);
  const tasksData = useGetEvents(currentDate);
  const dispatch = useDispatch();

  const allTags = tasksData.map((task) => task.tag);
  const tagsMap = new Map();

  allTags.forEach((tag) => {
    tagsMap.set(tag.title, tag);
  });

  const unqiueTags = Array.from(tagsMap.values());

  useEffect(() => {
    dispatch(setTags(unqiueTags));
  }, [unqiueTags, dispatch, currentDate]);

  return unqiueTags;
};
