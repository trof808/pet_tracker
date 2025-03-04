import styles from "./EventCard.module.css";

export type EventCardSize = "small" | "medium" | "large";

export type EventCardStatus = "canceled" | "done" | "backlog";

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

/**
 * Компонент для отображения события в календаре
 */
export const EventCard = ({ id, status, size, tag, startDateTime, endDateTime }: EventCardProps) => {
  const formattedDate = (isoDate: string | null) => isoDate ? new Date(isoDate).toISOString().slice(11, 16) : '-';

  const statusTitle = status !== 'backlog' ? styles.titleDecoration : '';

  const hasDetails = tag.title && startDateTime && endDateTime;

  const tagIndicatorElem = <span className={ styles.tagIndicator } style={ { backgroundColor: tag.color } } />;
  
  return (
    <div className={ `${styles.container} ${styles[size]} ${styles[status]}` }>
      <div className={ `${ styles.title } ${statusTitle}` }>
        { !hasDetails && tagIndicatorElem}
        Тех встреча. Обсуждаем форму поиска
      </div>
      { hasDetails && (
              <div className={ styles.details }>
                {tagIndicatorElem}
                <span className={ styles.tagTitle }>{ tag.title }</span>
                <span className={ styles.time }>
                  { formattedDate(startDateTime) } - { formattedDate(endDateTime) }
                </span>
            </div>
      ) }
    </div>
  );
};

