/** @jsxImportSource @emotion/react */

import { NavLink } from 'react-router-dom';
import { headerStyle } from './HeaderStyle';
import Avatar from 'components/BaseUI/Avatar/Avatar';
import AVATAR from 'assets/imgs/avatar.jpg';
import DarkModeButton from 'components/BaseUI/DarkModeButton/DarkModeButton';
import { AiOutlineMenu } from 'react-icons/ai';
import { ICON_SIZE, MENU } from 'constants/common';

// const NAME = 'Pham Van Dat';
const NAME = '';

const Header = () => {
  return (
    <>
      <header css={headerStyle.self}>
        <div css={headerStyle.wrapper}>
          <Avatar image={AVATAR} name={NAME} />
          <div css={headerStyle.container}>
            <ul css={headerStyle.menu}>
              {MENU.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink to={item.url} css={headerStyle.item}>
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
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
