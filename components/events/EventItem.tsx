import AddressIcon from '../icons/AddressIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import DateIcon from '../icons/DateIcon';
import Button from '../ui/Button';

import styles from './EventItem.module.css';

interface IEventItem {
  date: string;
  title: string;
  location: string;
  image: string;
  id: string;
}

export default function EventItem({
  title,
  image,
  date,
  location,
  id,
}: IEventItem): JSX.Element {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
