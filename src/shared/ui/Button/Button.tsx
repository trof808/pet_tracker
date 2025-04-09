import { JSX } from "react";
import styles from './Button.module.css'

export const Button = ({ onClick }: { onClick: () => void }): JSX.Element => {
    return (
      <button className={styles.today} type="button" onClick={onClick}>Сегодня</button>
    );
};