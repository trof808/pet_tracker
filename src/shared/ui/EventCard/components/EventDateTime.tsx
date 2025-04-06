import { JSX } from "react";
import styles from '../EventCard.module.css';
import { formattedDate } from "../../../utils/date";

export type EventDateTimeProps = {
  startDateTime: string | null,
  endDateTime: string | null;
}

export const EventDateTime = ({startDateTime, endDateTime}: EventDateTimeProps): JSX.Element => {
  return (
    <span className={styles.time}>
    {formattedDate(startDateTime)} - {formattedDate(endDateTime)}
  </span>
  )
};