import { Fragment, ReactNodeArray } from 'react';

import MainHeader from './MainHeader';

interface ILayout {
  children: string | React.ReactNode | ReactNodeArray;
}

export default function Layout({ children }: ILayout): JSX.Element {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
}
