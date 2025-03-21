import { JSX, useEffect, useRef, useState } from "react";
import styles from "./EventCard.module.css";
import checkIcon from "./assets/check.svg";
import binIcon from "./assets/bin.svg";
// import { useHandleSwipe } from "./hooks/useHandleSwipe";

// Вынести все строки в enum
export type EventCardSize = "small" | "medium" | "large";

// Вынести все строки в enum
export type EventCardStatus = "canceled" | "done" | "backlog";

export type TagType = {
  title: string;
  color: string;
};

export type StartDateTime = string | null;

export type EndDateTime = string | null;

export type cardEvent = string;

export type EventCardProps = {
  id: string;
  status: EventCardStatus;
  size: EventCardSize;
  cardTitle: cardEvent;
  tag: TagType;
  startDateTime: StartDateTime;
  endDateTime: EndDateTime;
  // Нужна функция, которая будет высчитывать высотку карточки в зависимости от времени, которое занимает задача
  height: string;
  onClick: (id: string) => void;
  onDelete: (id: string) => void;
  onDone: (id: string) => void;
};

// TODO: сделать типизацию обработчиков, компонента, тк сейчас стоит any. Спросить про функции onClick, onDelete, OnDone
// TODO: Декомпозировать на более мелкие компоненты
// TODO: Вынести логику в хук
/**
 * Компонент для отображения события в календаре
 */
export const EventCard = ({
  id,
  status,
  size,
  cardTitle,
  tag,
  startDateTime,
  endDateTime,
  height = '70px',
  onClick,
  onDone,
  onDelete,
}: EventCardProps): JSX.Element => {
  // Лучше не зависеть от стейта, а только от пропса
  const [taskStatus, setTaskStatus] = useState(status);
  const [touchStartX, setTouchStartX] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);

  // const { ref, handleEndMove, handleMove, handleStartMove } = useHandleSwipe();

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  // 1. Сдвиг по свайпу должен быть плавным
  // 2. delete/check должно происходить по свайпу, а не по кнопке, при достижении определенного сдвига
  // 3. Если не достигли определенной отметки сдвига и отпустили, то задача плавно свайпается назад
  // 4. Если задача уже checked, nо при сдвиге вправо делать uncheck
  // 5. Не блокировать отмену задачи, даже если она выполнена
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    // if (taskStatus === "done" || taskStatus === "canceled") return;
    if (touchStartX === 0) return;

    const touchMoveX = e.touches[0].clientX;
    const distnace = touchMoveX - touchStartX;

    // Меняем положение элемента через ref
    if (elementRef.current) {
      elementRef.current.style.transform = `translateX(${distnace}px)`;
    }
  };

  const handleTouchEnd = (): void => {
    if (elementRef.current) {
      elementRef.current.style.transform = "translateX(0)";
      elementRef.current.style.transition = "transform 0.3s ease"; // Плавное возвращение
    }

    setTouchStartX(0);
  };

  const handleTaskDone = (): void => {
    // Что если статус не удалось обновить, а в твоем компоненте он изменился?
    // Лучше не сетить самостоятельно статус, а сделать его зависимым от пропсов
    setTaskStatus("done");
    onDone(id);
  };

  const handleTaskDelete = (): void => {
    // Что если статус не удалось обновить, а в твоем компоненте он изменился?
    // Лучше не сетить самостоятельно статус, а сделать его зависимым от пропсов
    setTaskStatus("canceled");
    onDelete(id);
  };

  const handleCancelAction = (): void => {
    if (taskStatus === "done" || taskStatus === "canceled") {
      setTaskStatus("backlog");
    }
    onClick(id);
  };

  // Вынести в утилиту shared/utils/date
  const formattedDate = (isoDate: string | null): string => {
    return isoDate
      ? new Date(isoDate).toLocaleTimeString("ru", { timeStyle: "short" })
      : "-";
  };

  const statusTitle = taskStatus !== "backlog" ? styles.titleDecoration : "";

  const hasDetails = tag.title?.trim() && startDateTime && endDateTime;

  const hasTime = startDateTime && endDateTime;

  const tagIndicatorElem = (
    <span
      className={styles.tagIndicator}
      style={{ backgroundColor: tag.color }}
    />
  );

  return (
    <div
      className={`${styles.container} ${styles[size]}`}
      style={{ height }}
      onClick={handleCancelAction}
    >
      <div className={styles.taskBackground}>
        <img
          className={`${styles.icon} ${styles.checkIcon}`}
          src={checkIcon}
          alt="Check"
        />

        <img
          className={`${styles.icon} ${styles.binIcon}`}
          src={binIcon}
          alt="Bin"
        />
      </div>
      <div
        className={`${styles.taskItem} ${styles[taskStatus]}`}
        ref={elementRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`${styles.title} ${statusTitle}`}>
          {!hasDetails && !hasTime && tagIndicatorElem}
          {cardTitle}
        </div>
        {hasDetails && (
          <div className={styles.details}>
            {tagIndicatorElem}
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
