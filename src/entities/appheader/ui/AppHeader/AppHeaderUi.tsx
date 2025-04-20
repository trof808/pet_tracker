// тут глобальный хедер, аватарка, имя и фамилия, уведомления, смена темы

import { JSX } from 'react';
import styles from './AppHeader.module.css';

import notifyIcon from './images/notifyIcon.png'
import sonicAvatar from './images/sonicAvatar.jpg';
import themeSwitch from './images/themeSwitch.png';

// Вынести в виджет
// Сделать фичу с отображением данных о пользователе
export const AppHeaderUi = (data: { userMail?: string }): JSX.Element => {
  return (
    <header className={styles.container}>
      <div className={styles.userDetails}>
        <img src={sonicAvatar} alt="Avatar" className={styles.avatar} />
        <span className={styles.userName}>{data.userMail}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.notificationBtn}>
          <img src={notifyIcon} alt="Notifications" />
        </button>
        <button className={styles.themeSwitch}>
          <img src={themeSwitch} alt="Theme switch" />
        </button>
      </div>
    </header>
  );
};
