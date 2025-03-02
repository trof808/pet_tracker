import styles from "./EventCard.module.css";

export type EventCardSize = "small" | "normal";

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
export const EventCard = ({}: EventCardProps) => {
  return <div className={styles.container}>EventCard</div>;
};
