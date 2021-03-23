import { useRouter } from 'next/router';
import { Fragment } from 'react';

import EventList from '../../components/events/EventList';
import { getFilteredEvents } from '../../dummy-data';

import { IEvent } from './index';

export default function FilteredEventsPage(): JSX.Element {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading</p>;
  }

  const [year, month] = filterData as string[];
  const parsedYear = Number.parseInt(year, 10);
  const parsedMonth = Number.parseInt(month, 10);

  if (
    isNaN(parsedYear) ||
    isNaN(parsedMonth) ||
    parsedYear < new Date().getFullYear() ||
    parsedMonth > 12 ||
    parsedMonth < 1
  ) {
    return <p className="center">Invalid filter, please adjust your values</p>;
  }
  const filteredEvents: IEvent[] = getFilteredEvents({
    year: parsedYear,
    month: parsedMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">No events found for the chosen filter</p>;
  }

  return (
    <Fragment>
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
