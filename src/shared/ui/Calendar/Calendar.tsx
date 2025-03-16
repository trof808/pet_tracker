import { JSX } from 'react';
import styles from './Calendar.module.css';
import { EventCard } from '../EventCard/EventCard';

export const Calendar = (): JSX.Element => {
  const cellsTime = [...new Array(24)];

  return (
    <>
      <div className={ styles.calendarContainer }>
        <div className= { styles.allDaysTasks }>
          <EventCard
            id="2"
            status="backlog"
            size="small"
            cardTitle='Заплатить за аренду квартиры'
            tag={ { title: '', color: 'red' } }
            startDateTime=""
            endDateTime=""
            onClick={ (id) => console.log('Клик по карточке:', id) }
            onDelete={ (id) => console.log('Удаляем задачу:', id) }
            onDone={ (id) => console.log('Завершаем задачу:', id) }
          />
          <EventCard
            id="3"
            status="backlog"
            size="small"
            cardTitle='День рождения друга'
            tag={ { title: '', color: 'black' } }
            startDateTime=""
            endDateTime=""
            onClick={ (id) => console.log('Клик по карточке:', id) }
            onDelete={ (id) => console.log('Удаляем задачу:', id) }
            onDone={ (id) => console.log('Завершаем задачу:', id) }
          />
        </div>
        <div className={ styles.divider } />
        {cellsTime.map((_, index) => (
          <div className={ styles.timeSlot }  key={ index }>
            <div className={ styles.timeLabel }>{index}:00</div>
            {/* <div className={ styles.eventContainer }>Array of events</div> */}
            <div className={ styles.eventContainer }>
              <EventCard
                id="1"
                status="backlog"
                size="medium"
                cardTitle='Тех встреча. Обсуждение рефакторинга'
                tag={ { title: 'Работа', color: 'blue' } }
                startDateTime="2025-03-17T09:00:00Z"
                endDateTime="2025-03-17T10:00:00Z"
                onClick={ (id) => console.log('Клик по карточке:', id) }
                onDelete={ (id) => console.log('Удаляем задачу:', id) }
                onDone={ (id) => console.log('Завершаем задачу:', id) }
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
