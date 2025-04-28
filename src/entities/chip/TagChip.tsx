import { JSX } from 'react';
import styles from './TagChip.module.css';

type TagProps = {
  color: string;
  title: string;
}

// chip это не сущность приложения. Это просто низкоуровневый компонент из ui kit
export const TagChip = ({ color, title }: TagProps): JSX.Element => {
  return (
    <button className={styles.TagChip} type="button">
      <span
        className={styles.tagIndicator}
        style={{ backgroundColor: color }}
      />
      <span className={styles.TagChip}>{title}</span>
    </button>
  );
};