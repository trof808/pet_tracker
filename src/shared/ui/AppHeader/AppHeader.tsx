// тут глобальный хедер, аватарка, имя и фамилия, уведомления, смена темы

import { JSX } from 'react';
import styles from './AppHeader.module.css';

import notifyIcon from './images/notifyIcon.png';
import sonicAvatar from './images/sonicAvatar.jpg';
import themeSwitch from './images/themeSwitch.png';

export const AppHeader = (): JSX.Element => {
  return (
    <header className={styles.container}>
      <div className={styles.userDetails}>
        <img src={sonicAvatar} alt="Avatar" className={styles.avatar} />
        <span className={styles.userName}>Ivan Ivanov</span>
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
