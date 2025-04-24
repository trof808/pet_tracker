import { JSX } from 'react';
import styles from '../../features/Calendar/Calendar.module.css';
import { MonthSelectFeature } from '../../features/MonthSelect/MonthSelectFeature';
import { TodayButtonFeature } from '../../features/TodayButton/TodayButtonFeature';
import { FilterChipsFeature } from '../../features/Filters/FilterChipsFeature';

// Тут будет лежать 3 фичи
// Выбор месяца, выбор сегодня, фильтрация по тегам
export const ActionsToolbar = (): JSX.Element => {
  return (
    <div className={styles.toolBar}>
      <div className={styles.toolBarDetails}>
        <MonthSelectFeature />
        <TodayButtonFeature />
        <FilterChipsFeature />
      </div>
    </div>
  );
};
