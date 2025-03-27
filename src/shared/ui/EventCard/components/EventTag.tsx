import { JSX } from 'react';
import styles from '../EventCard.module.css';

export const EventTag = ({tagColor}: {tagColor: string}): JSX.Element => {
  return (
    <span
      className={styles.tagIndicator}
      style={{ backgroundColor: tagColor }}
    />
  );
};
