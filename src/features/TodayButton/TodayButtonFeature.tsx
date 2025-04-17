import { JSX } from "react";
import { TodayButton } from "../../entities/calendar/ui/TodayButton/TodayButton";


// тут в дальнейшем опять же будет связь с хранилищем
// при клике на кнопку, будет перемещение в слайдере к сегодняшнему числу и, скорее всего, обновление состояния 

export const TodayButtonFeature = (): JSX.Element => {
  const todayDate = new Date().toLocaleDateString();

  const onClick = () => {
    console.log(`${todayDate}`);
  };

  return (
    <TodayButton onClick={onClick} />
  );
};