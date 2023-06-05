/** @jsxImportSource @emotion/react */

import { NavLink } from "react-router-dom";
import { headerStyle } from "./HeaderStyle";
import Avatar from "components/BaseUI/Avatar/Avatar";
import DarkModeButton from "components/BaseUI/DarkModeButton/DarkModeButton";
import { AiOutlineMenu } from "react-icons/ai";
import { ICON_SIZE, MENU, NAME } from "constants/common";
import { circleButtonStyle } from "style/common";
import { IMAGES } from "constants/image";

interface HeaderProps {
  setShowSidebar: (showSidebar: boolean) => void;
}
const Header = ({ setShowSidebar }: HeaderProps) => {
  return (
    <header css={headerStyle.self}>
      <div css={headerStyle.wrapper}>
        <Avatar image={IMAGES.AVATAR} name={NAME} />
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
          <div
            css={[circleButtonStyle, headerStyle.menuIcon]}
            onClick={() => setShowSidebar(true)}
          >
            <AiOutlineMenu size={ICON_SIZE.sm} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
