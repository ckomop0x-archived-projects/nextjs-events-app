import Link from 'next/link';
import React from 'react';

import styles from './Button.module.css';

interface IButton {
  link?: string;
  children: string | React.ReactNode | React.ReactNodeArray;
  onClick(): void;
}

export default function Button({
  link,
  children,
  onClick,
}: IButton): JSX.Element {
  if (link) {
    return (
      <Link href={link}>
        <a className={styles.btn}>{children}</a>
      </Link>
    );
  }

  return <button onClick={onClick}>{children}</button>;
}
