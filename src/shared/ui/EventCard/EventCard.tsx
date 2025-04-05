import { JSX } from 'react';
import { useHandleSwipe } from './hooks/useHandleSwipe';
import { EventVisible } from './components/EventVisible';
import { EventBackground } from './components/EventBackground';
import styles from './EventCard.module.css';
import { EventTag } from './components/EventTag';

export enum EventCardStatus {
  Canceled = 'canceled',
  Done = 'done',
  Backlog = 'backlog',
}

export type TagType = {
  title: string;
  color: string;
};

export type StartDateTime = string | null;

export type EndDateTime = string | null;

export type EventCardProps = {
  id: string;
  status: EventCardStatus;
  cardTitle: string;
  tag: TagType;
  startDateTime: StartDateTime;
  endDateTime: EndDateTime;
  height: string;
  onClick: (id: string) => void;
  onDelete: (id: string) => void;
  onDone: (id: string) => void;
  compact?: boolean;
};

/**
 * Компонент для отображения события в календаре
 */
export const EventCard = ({
  id,
  status,
  cardTitle,
  tag,
  startDateTime,
  endDateTime,
  height,
  onClick,
  onDone,
  onDelete,
  compact,
}: EventCardProps): JSX.Element => {
  const { elementRef, handleTouchStart, handleTouchMove, handleTouchEnd } =
    useHandleSwipe(id, onDone, onClick, onDelete);

  const hasDetails = tag.title?.trim() && startDateTime && endDateTime;

  const hasTime = startDateTime && endDateTime;

  const containerTopStyle = !hasDetails &&
  !hasTime && <EventTag tagColor={tag.color} />
    ? { top: '0' }
    : {};

  return (
    <div
      className={`${styles.container} ${compact ? styles.compact : ''}`}
      style={{ height, ...containerTopStyle }}
      // onClick={handleClick}
    >
      <EventBackground />
      <EventVisible
        id={id}
        status={status}
        cardTitle={cardTitle}
        tag={tag}
        startDateTime={startDateTime}
        endDateTime={endDateTime}
        height={height}
        onClick={() => onClick(id)}
        onDone={() => onDone(id)}
        onDelete={() => onDelete(id)}
        elementRef={elementRef}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
        compact={compact}
      />
    </div>
  );
};
