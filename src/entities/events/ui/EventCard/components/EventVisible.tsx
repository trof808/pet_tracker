import React, { JSX } from 'react';
import styles from '../EventCard.module.css';
import { EventCardProps, EventCardStatus } from '../EventCard';
import { EventTag } from './EventTag';
import { EventDateTime } from './EventDateTime';

export type IDs = number;

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
    ? { padding: '3px 3px 3px 10px' }
    : {};

  return (
    <div
      className={`${styles.taskItem} ${styles[status]}`}
      ref={elementRef}
      style={paddingStyle}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      // Чтобы работало на десктопе добавить ивенты с onMouse*
    >
      <div className={`${styles.title} ${statusTitle}`}>
        {!hasDetails && !hasTime && <EventTag tagColor={tag.color} />}
        {cardTitle}
      </div>
      {hasDetails && (
        <div className={styles.details}>
          <EventTag tagColor={tag.color} tagTitle={tag.title} />
          <EventDateTime
            startDateTime={startDateTime}
            endDateTime={endDateTime}
          />
        </div>
      )}
      {!hasDetails && hasTime && (
        <div className={styles.details}>
          <EventDateTime
            startDateTime={startDateTime}
            endDateTime={endDateTime}
          />
        </div>
      )}
    </div>
  );
};
