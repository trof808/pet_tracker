import { JSX } from 'react';
import styles from './CreateTaskForm.module.css';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import { RequestEventData } from '../../../events/services/eventApiTypes';

type Form = {
  card_title: string;
  status: string;
  tag: {
    title: string;
    color: string;
  };
  start_date_time: string;
  end_date_time: string;
};

export const CreateTaskForm = ({
  onClose,
  isPending,
  mutate,
}: {
  onClose: (active: boolean) => void;
  isPending: boolean;
  mutate: (data: RequestEventData) => void;
}): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit = async (data: Form) => {
    await mutate(data);
    onClose(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label}>
        Название события
        <input
          type="text"
          placeholder="Введите название события"
          className={cn(styles.input, {
            [styles.inputError]: errors.card_title,
          })}
          {...register('card_title', { required: 'Обязательное поле' })}
        />
      </label>

      <label className={styles.label}>
        Статус
        <select
          className={cn(styles.input, {
            [styles.inputError]: errors.status,
          })}
          {...register('status', { required: 'Обязательное поле' })}
        >
          <option value="backlog">Запланировано</option>
          <option value="done">Выполнено</option>
          <option value="canceled">Отменено</option>
        </select>
      </label>

      <label className={styles.label}>
        Название тега
        <input
          placeholder="Введите название тега"
          className={cn(styles.input, {
            [styles.inputError]: errors.tag?.title,
          })}
          {...register('tag.title', { required: 'Обязательное поле' })}
        />
      </label>
      <label className={styles.label}>
        Цвет тега
        <input
          type="color"
          className={cn(styles.colorInput, {
            [styles.inputError]: errors.tag?.color,
          })}
          {...register('tag.color', { required: 'Укажите цвет' })}
        />
      </label>

      <label className={styles.label}>
        Начало события
        <input
          type="datetime-local"
          className={cn(styles.input, {
            [styles.inputError]: errors.start_date_time,
          })}
          {...register('start_date_time', {
            required: 'Укажите дату и время',
          })}
        />
      </label>

      <label className={styles.label}>
        Конец события
        <input
          type="datetime-local"
          className={cn(styles.input, {
            [styles.inputError]: errors.end_date_time,
          })}
          {...register('end_date_time', {
            required: 'Укажите дату и время',
          })}
        />
      </label>

      <div className={styles.footer}>
        <button
          type="button"
          className={styles.btnSecondary}
          onClick={() => onClose(false)}
        >
          Закрыть
        </button>
        <button
          type="submit"
          className={styles.btnPrimary}
          disabled={isPending}
        >
          Сохранить
        </button>
      </div>
    </form>
  );
};
