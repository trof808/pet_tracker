import { JSX } from 'react';
import styles from '../EventCard.module.css';

export type EventTagProps = {
  tagColor: string;
  tagTitle?: string;
};

export const EventTag = ({ tagColor, tagTitle }: EventTagProps): JSX.Element => {
  return (
    <>
      <span
        className={styles.tagIndicator}
        style={{ backgroundColor: tagColor }}
      />
      <span className={styles.tagTitle}>{tagTitle}</span>
    </>
  );
};
