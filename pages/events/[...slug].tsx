import { Fragment } from 'react';

import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../dummy-data';

import { IEvent } from './index';

export default function FilteredEventsPage(): JSX.Element {
  const events: IEvent[] = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EventList items={events} />
    </Fragment>
  );
}
