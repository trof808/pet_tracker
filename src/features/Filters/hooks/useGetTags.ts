import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setTags } from '../../../entities/calendar/store/filtersSlice';
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

const getUniqueTags = (tags: FiltersTag[]) => {
  const tagsMap = new Map();
  
  tags.forEach((tag) => {
    tagsMap.set(tag.title, tag);
  });
  return Array.from(tagsMap.values());
};


export const useGetTags = (): FiltersTag[] => {
  const currentDate = useSelector(({ filters }: FiltersStore) => filters.date);
  const tasksData = useGetEvents({ date: currentDate });
  const dispatch = useDispatch();

  const allTags = tasksData.map((task) => task.tag);

  // не совсем понял момент про то, что мы должны вынести это в "константную" область.
  // разве не будет каждый раз при ререндере создаваться новый uniqueTags?
  // ну и при изменнии tagsMap тоже же будет пересоздание.
  // или мы тут избегаем создания нового массива тегов, когда нам это не нужно?

  // UPD: вроде понял, у нас ререндер самого хука происходит:
  // приходят новые задачи => достаем теги => достаем уникальные теги => передаем дальше
  // а сама коллекция Map в данном случае, не изменяется, она по сути как создалась пустой и просто наполняется
  // так что мы по сути данным выносом избегаем повторного создания коллекции
  const uniqueTags = getUniqueTags(allTags);

  useEffect(() => {
    dispatch(setTags(uniqueTags));
  }, [uniqueTags, dispatch, currentDate]);

  return uniqueTags;
};
