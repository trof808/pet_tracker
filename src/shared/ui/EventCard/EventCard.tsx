import { useState } from 'react';
import styles from './EventCard.module.css';
import checkIcon from './assets/check.svg';
import binIcon from './assets/bin.svg';

export type EventCardSize = 'small' | 'medium' | 'large';

export type EventCardStatus = 'canceled' | 'done' | 'backlog';

export type TagType = {
  title: string;
  color: string;
};

export type StartDateTime = string | null;

export type EndDateTime = string | null;

export type EventCardProps = {
  id: string;
  status: EventCardStatus;
  size: EventCardSize;
  tag: TagType;
  startDateTime: StartDateTime;
  endDateTime: EndDateTime;
  onClick: (id: string) => void;
  onDelete: (id: string) => void;
  onDone: (id: string) => void;
};

// TODO: сделать типизацию обработчиков, компонента, тк сейчас стоит any. Спросить про функции onClick, onDelete, OnDone

/**
 * Компонент для отображения события в календаре
 */
export const EventCard = ({
  id,
  status,
  size,
  tag,
  startDateTime,
  endDateTime,
  onClick,
  onDone,
  onDelete,
}:  EventCardProps): any => {
  const [taskStatus, setTaskStatus] = useState(status);
  const [touchStartX, setTouchStartX] = useState(0);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const [doneTask, setDoneTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);

  const minDistanceSwipe = 20;

  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    if (touchStartX === 0) return;

    const touchMoveX = e.touches[0].clientX;
    const distnace = touchMoveX - touchStartX;
    setSwipeDistance(distnace);
  };

  const handleTouchEnd = () => {
    if (swipeDistance > minDistanceSwipe) {
      setDoneTask(true);
      setDeleteTask(false);
    } else if (swipeDistance < -minDistanceSwipe) {
      setDeleteTask(true);
      setDoneTask(false);
    }

    setSwipeDistance(0);
    setTouchStartX(0);
  };

  const handleTaskDone = () => {
    setTaskStatus('done');
    setDoneTask(false);
    setDeleteTask(false);
    onDone(id);
  }

  const handleTaskDelete = () => {
    setTaskStatus('canceled');
    setDoneTask(false);
    setDeleteTask(false);
    onDelete(id);
  }

  const handleCancelAction = () => {
    if (taskStatus === 'done' || taskStatus === 'canceled') {
      setTaskStatus('backlog') 
    };
    setSwipeDistance(0);
    setDoneTask(false);
    setDeleteTask(false);
    onClick(id);
  }

  const formattedDate = (isoDate: string | null) =>
    isoDate
      ? new Date(isoDate).toLocaleTimeString('ru', { timeStyle: 'short' })
      : '-';

  const statusTitle = taskStatus !== 'backlog' ? styles.titleDecoration : '';

  const hasDetails = tag.title?.trim() && startDateTime && endDateTime;

  const hasTime = startDateTime && endDateTime;

  const tagIndicatorElem = (
    <span
      className={ styles.tagIndicator }
      style={ { backgroundColor: tag.color } }
    />
  );

  return (
    <div
      className={ `${styles.container} ${styles[size]} ${styles[taskStatus]}` }
      // onClick={ () => onClick(id) }
      onClick={ handleCancelAction }
      onTouchStart={ handleTouchStart }
      onTouchMove={ handleTouchMove }
      onTouchEnd={ handleTouchEnd }
    >
      <div className={ `${styles.title} ${statusTitle}` }>
        {!hasDetails && !hasTime && tagIndicatorElem}
        Тех встреча. Обсуждаем форму поиска
      </div>
      {doneTask && (
        <button className={ styles.doneButton } 
        // onClick={ () => onDone(id) }
        onClick={ handleTaskDone }
        >
          <img
            className={ `${styles.icon} ${styles.checkIcon}` }
            src={ checkIcon }
            alt="Check"
          />
        </button>
      )}

      {deleteTask && (
        <button className={ styles.deleteButton } 
        // onClick={ () => onDelete(id) }
        onClick={ handleTaskDelete }
        >
          <img
            className={ `${styles.icon} ${styles.binIcon}` }
            src={ binIcon }
            alt="Bin"
          />
        </button>
      )}
      {hasDetails && (
        <div className={ styles.details }>
          {tagIndicatorElem}
          <span className={ styles.tagTitle }>{tag.title}</span>
          <span className={ styles.time }>
            {formattedDate(startDateTime)} - {formattedDate(endDateTime)}
          </span>
        </div>
      )}
      {!hasDetails && hasTime && (
        <div className={ styles.details }>
          <span className={ styles.time }>
            {formattedDate(startDateTime)} - {formattedDate(endDateTime)}
          </span>
        </div>
      )}
    </div>
  );
};
