import { ReactNode } from 'react';

import styles from './ErrorAlert.module.css';

interface IErrorAlert {
  children: ReactNode;
}

export default function ErrorAlert({ children }: IErrorAlert): JSX.Element {
  return <div className={styles.alert}>{children}</div>;
}
