import EventItem from "./EventItem";

export default function EventList({ items }) {
  return (
    <ul>
      {items.map(({ title }) => (
        <EventItem title={title} />
      ))}
    </ul>
  );
}
