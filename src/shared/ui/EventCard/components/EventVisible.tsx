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
  const statusTitle = status !== EventCardStatus.Backlog ? styles.titleDecoration : '';

  const hasDetails = tag.title?.trim() && startDateTime && endDateTime;

  const hasTime = startDateTime && endDateTime;

  const paddingStyle = !hasDetails &&
  !hasTime && <EventTag tagColor={tag.color} />
    ? { padding: '3px 3px 3px 10px' }
    : {};

  const containerTopStyle = !hasDetails && !hasTime && <EventTag tagColor={tag.color} /> ? { top: '0'} : {};

  return (
    <div
      className={`${styles.container}`}
      style={{ height, ...containerTopStyle }}
      // onClick={handleClick}
    >
      <EventBackground />
      {/* <EventVisible /> */}
      {/* По идее все что ниже и есть EventVisible */}
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
            <EventTag tagColor={tag.color} />
            {/* title по идее тоже должен входить в компонент EventTag */}
            <span className={styles.tagTitle}>{tag.title}</span>
            {/* EventDateTime */}
            <span className={styles.time}>
              {formattedDate(startDateTime)} - {formattedDate(endDateTime)}
            </span>
          </div>
        )}
        {!hasDetails && hasTime && (
          <div className={styles.details}>
            {/* EventDateTime */}
            <span className={styles.time}>
              {formattedDate(startDateTime)} - {formattedDate(endDateTime)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
