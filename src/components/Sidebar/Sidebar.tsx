/** @jsxImportSource @emotion/react */

import Avatar from 'components/BaseUI/Avatar/Avatar';
import AVATAR from 'assets/imgs/avatar.jpg';
import { NavLink } from 'react-router-dom';
import { MENU } from 'constants/common';
import { sidebarStyle } from './SidebarStyle';

const Sidebar = () => {
  return (
    <div css={sidebarStyle.self}>
      <div css={sidebarStyle.header}>
        <Avatar image={AVATAR} />
        <p>Description about my self</p>
      </div>
      <ul css={sidebarStyle.menu}>
        {MENU.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item.url} css={sidebarStyle.item}>
                <span>{item.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div css={sidebarStyle.footer}></div>
    </div>
  );
};

export default Sidebar;
