import { useRouter } from 'next/router';
import { Fragment } from 'react';

import EventContent from '../../components/event-detail/EventContent';
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventSummary from '../../components/event-detail/EventSummary';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/ErrorAlert';
import { getEventById } from '../../dummy-data';

export default function EventDetailPage(): JSX.Element {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <div className="center">
        <ErrorAlert>
          <p>No event found</p>
        </ErrorAlert>
        <Button link="/events">Show all events</Button>
      </div>
    );
  }

  return (
    <div>
      <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          address={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>{event.description}</EventContent>
      </Fragment>
    </div>
  );
}
