import EventList from '../../components/events/EventList';
import { getAllEvents } from '../../dummy-data';

export interface IEvent {
  date: string;
  image: string;
  description: string;
  location: string;
  id: string;
  title: string;
  isFeatured: boolean;
}

export default function EventsPage(): JSX.Element {
  const events: IEvent[] = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}
