import './App.css';
import { EventCard } from './shared/ui/EventCard/EventCard';

const App = () => {
  return (
    // <div>
    //   Task Tracker
    // </div>
    <EventCard
      id="1"
      status="backlog"
      size="medium"
      tag={ { title: 'Менторство', color: '#73AFBC' } }
      startDateTime="2025-03-07T10:00:00Z"
      endDateTime="2025-03-07T11:00:00Z"
      onClick={ (id) => console.log('Clicked', id) }
      onDone={ (id) => console.log('Done', id) }
      onDelete={ (id) => console.log('Deleted', id) }
    />
  );
};

export default App;
