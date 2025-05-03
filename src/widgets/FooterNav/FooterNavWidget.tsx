import { JSX } from 'react';
import styles from './FooterNavWidget.module.css';
import { StatsButton } from '../../entities/footer/ui/StatsButton/StatsButton';
import { CreateTaskFeature } from '../../features/CreateTask/CreateTaskFeature';
import { SettingsButtonFeature } from '../../features/SettingsButton/SettingsButtonFeature';
import { HomeButtonFeature } from '../../features/HomeButton/HomeButtonFeature';
import { TimerButtonFeature } from '../../features/TimerButton/TimerButtonFeature';

export const FooterNavWidget = (): JSX.Element => {
  return (
    <nav className={styles.footerNav}>
      <TimerButtonFeature />
      <HomeButtonFeature />
      <CreateTaskFeature />
      <StatsButton />
      <SettingsButtonFeature />
    </nav>
  );
};
