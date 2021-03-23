import { ReactNode } from 'react';

import styles from './EventContent.module.css';

interface IEventContent {
  children: string | ReactNode;
}

export default function EventContent({ children }: IEventContent): JSX.Element {
  return <section className={styles.content}>{children}</section>;
}
