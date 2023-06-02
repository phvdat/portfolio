/** @jsxImportSource @emotion/react */

import Avatar from 'components/BaseUI/Avatar/Avatar';
import AVATAR from 'assets/imgs/avatar.jpg';
import { NavLink } from 'react-router-dom';
import { ICON_SIZE, MENU } from 'constants/common';
import { sidebarStyle } from './SidebarStyle';
import { useCallback, useEffect, useRef } from 'react';
import { circleButtonStyle } from 'style/common';
import { IoMdClose } from 'react-icons/io';

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
        <div css={sidebarStyle.header}>
          <div css={sidebarStyle.avatarContainer}>
            <Avatar image={AVATAR} />
            <div css={circleButtonStyle} onClick={() => setShowSidebar(false)}>
              <IoMdClose size={ICON_SIZE.sm} />
            </div>
          </div>
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
    </div>
  );
};

export default Sidebar;
