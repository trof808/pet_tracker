import { JSX } from 'react';
import styles from './FooterNavFeature.module.css'
import { TimerButton } from '../../entities/footer/ui/TimerButton/TimerButton';
import { HomeButton } from '../../entities/footer/ui/HomeButton/HomeButton';
import { CreateTaskButton } from '../../entities/footer/ui/CreateTaskButton/CreateTaskButton';
import { StatsButton } from '../../entities/footer/ui/StatsButton/StatsButton';
import { SettingsButton } from '../../entities/footer/ui/SettingsButton/SettingsButton';

export const FooterNavFeature = (): JSX.Element => {
  return (
    <nav className={styles.footerNav}>
      <TimerButton />
      <HomeButton />
      <CreateTaskButton />
      <StatsButton />
      <SettingsButton />
    </nav>
  )
};
