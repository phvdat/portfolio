/** @jsxImportSource @emotion/react */

import { NavLink } from 'react-router-dom';
import { headerStyle } from './HeaderStyle';
import Avatar from 'components/BaseUI/Avatar/Avatar';
import AVATAR from 'assets/imgs/avatar.jpg';
import DarkModeButton from 'components/BaseUI/DarkModeButton/DarkModeButton';
import { RoutePath } from 'constants/routes';
import { AiOutlineMenu } from 'react-icons/ai';
import { ICON_SIZE } from 'constants/common';

// const NAME = 'Pham Van Dat';
const NAME = '';
const MENU = [
  {
    label: 'HOME',
    url: RoutePath.Home
  },
  {
    label: 'FEATURES',
    url: RoutePath.Features
  },
  {
    label: 'RESUME',
    url: RoutePath.Resume
  },
  {
    label: 'BLOG',
    url: RoutePath.Blog
  },
  {
    label: 'CONTACTS',
    url: RoutePath.Contact
  }
];
const Header = () => {
  return (
    <>
      <header css={headerStyle.self}>
        <div css={headerStyle.wrapper}>
          <Avatar image={AVATAR} name={NAME} />
          <div css={headerStyle.container}>
            <div css={headerStyle.menu}>
              {MENU.map((item) => {
                return (
                  <NavLink to={item.url} css={headerStyle.item}>
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
            <DarkModeButton />
            <div css={headerStyle.menuIcon}>
              <AiOutlineMenu size={ICON_SIZE.sm} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
