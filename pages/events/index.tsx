import { useRouter } from 'next/router';
import { Fragment } from 'react';

import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
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
  const router = useRouter();

  const findEventsHandler = ({
    year = '',
    month = '',
  }: {
    year?: string;
    month?: string;
  }): void => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}
