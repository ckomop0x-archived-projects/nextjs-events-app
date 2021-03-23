import { IEvent } from '../../../pages/events';
import EventItem from '../EventItem';

import styles from './EventList.module.css';

interface IEventList {
  items: IEvent[];
}

export default function EventList({ items }: IEventList): JSX.Element {
  return (
    <ul className={styles.list}>
      {items.map(({ title, image, date, location, id }) => (
        <EventItem
          key={id}
          title={title}
          image={image}
          date={date}
          location={location}
          id={id}
        />
      ))}
    </ul>
  );
}
