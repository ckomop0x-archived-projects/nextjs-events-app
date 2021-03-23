import AddressIcon from '../icons/AddressIcon';
import DateIcon from '../icons/DateIcon';

import styles from './EventLogistics.module.css';
import LogisticsItem from './LogisticsItem';

interface IEventLogistics {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

function EventLogistics({
  date,
  address,
  image,
  imageAlt,
}: IEventLogistics): JSX.Element {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
