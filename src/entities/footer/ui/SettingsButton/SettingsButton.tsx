import { JSX } from "react";
import styles from './SettingsButton.module.css';
import SettingsBtn from './assets/icons/SettingBtn.svg'

export const SettingsButton = (): JSX.Element => {
  return (
    <button className={styles.btn}>
      <img src={SettingsBtn} alt="Settings Button" />
    </button>
  )
};