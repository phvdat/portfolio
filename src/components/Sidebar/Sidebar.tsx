/** @jsxImportSource @emotion/react */

import Avatar from 'components/BaseUI/Avatar/Avatar';
import { NavLink } from 'react-router-dom';
import { ICON_SIZE, MENU, NAME } from 'constants/common';
import { sidebarStyle } from './SidebarStyle';
import { useEffect, useRef } from 'react';
import { circleButtonStyle, horizontalLine } from 'style/common';
import { IoMdClose } from 'react-icons/io';
import { IMAGES } from 'constants/image';
import { FindWithMe } from 'components/FindWithMe/FindWithMe';

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: (visible: boolean) => void;
}

const Sidebar = ({ showSidebar, setShowSidebar }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div css={[sidebarStyle.container]} aria-expanded={showSidebar}>
      <div css={sidebarStyle.self} aria-expanded={showSidebar} ref={sidebarRef}>
        <div>
          <div css={sidebarStyle.avatarContainer}>
            <Avatar image={IMAGES.AVATAR} name={NAME} />
            <div css={circleButtonStyle} onClick={() => setShowSidebar(false)}>
              <IoMdClose size={ICON_SIZE.sm} />
            </div>
          </div>
          <p css={sidebarStyle.description}>
            Description about my self: Inbio is a all in one personal portfolio
            WordPress theme. You can customize everything.
          </p>
          <div css={horizontalLine}></div>
        </div>
        <ul css={sidebarStyle.menu}>
          {MENU.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.url}>{item.label}</NavLink>
              </li>
            );
          })}
        </ul>
        <div css={horizontalLine}></div>
        <div css={sidebarStyle.footer}>
          <FindWithMe />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
