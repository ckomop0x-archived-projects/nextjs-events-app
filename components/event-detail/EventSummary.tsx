import styles from './EventSummary.module.css';

interface IEventSummary {
  title: string;
}

export default function EventSummary({ title }: IEventSummary): JSX.Element {
  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  );
}
