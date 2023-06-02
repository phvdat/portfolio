/** @jsxImportSource @emotion/react */

import { Outlet } from 'react-router-dom';
import Header from '../../Header/Header';
import { defaultLayoutStyle } from './DefaultLayoutStyle';
import Sidebar from 'components/Sidebar/Sidebar';
import { useState } from 'react';

const DefaultLayout = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div css={defaultLayoutStyle.outlet}>
        <Outlet />
      </div>
    </>
  );
};

export default DefaultLayout;
