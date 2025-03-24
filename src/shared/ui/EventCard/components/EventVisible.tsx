import React, { JSX } from 'react';
import styles from '../EventCard.module.css';
import { EventCardProps, EventCardStatus } from '../EventCard';
import { EventTag } from './EventTag';
import { EventBackground } from './EventBackground';
import { formattedDate } from '../../../utils/date';

export type IDs = string;

type EventVisibleProps = EventCardProps & {
  elementRef: React.RefObject<HTMLDivElement | null>;
  handleTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void;
  handleTouchMove: (e: React.TouchEvent<HTMLDivElement>) => void;
  handleTouchEnd: () => void;
};

export const EventVisible = ({
  status,
  cardTitle,
  tag,
  startDateTime,
  endDateTime,
  height,
  elementRef,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
}: EventVisibleProps): JSX.Element => {
  const statusTitle =
    status !== EventCardStatus.Backlog ? styles.titleDecoration : '';

  const hasDetails = tag.title?.trim() && startDateTime && endDateTime;

  const hasTime = startDateTime && endDateTime;

  const paddingStyle = !hasDetails &&
  !hasTime && <EventTag tagColor={tag.color} />
    ? { padding: '3px' }
    : { padding: '10px' };

  return (
    <div
      className={`${styles.container}`}
      style={{ height }}
      // onClick={handleClick}
    >
      <EventBackground />
      <div
        className={`${styles.taskItem} ${styles[status]}`}
        ref={elementRef}
        style={paddingStyle}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`${styles.title} ${statusTitle}`}>
          {!hasDetails && !hasTime && <EventTag tagColor={tag.color} />}
          {cardTitle}
        </div>
        {hasDetails && (
          <div className={styles.details}>
            <EventTag tagColor={tag.color} />
            <span className={styles.tagTitle}>{tag.title}</span>
            <span className={styles.time}>
              {formattedDate(startDateTime)} - {formattedDate(endDateTime)}
            </span>
          </div>
        )}
        {!hasDetails && hasTime && (
          <div className={styles.details}>
            <span className={styles.time}>
              {formattedDate(startDateTime)} - {formattedDate(endDateTime)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
