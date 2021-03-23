import { ReactElement } from 'react';

import classes from './LogisticsItem.module.css';

interface ILogisticsItem {
  children: ReactElement;
  icon(): JSX.Element;
}

function LogisticsItem({ icon: Icon, children }: ILogisticsItem): JSX.Element {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
