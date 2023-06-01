/** @jsxImportSource @emotion/react */

import { Outlet } from 'react-router-dom';
import Header from '../../Header/Header';
import { defaultLayoutStyle } from './DefaultLayoutStyle';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <div css={defaultLayoutStyle.outlet}>
        <Outlet />
      </div>
    </>
  );
};

export default DefaultLayout;
