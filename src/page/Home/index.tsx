/** @jsxImportSource @emotion/react */

import { IMAGES } from 'constants/image';
import { homePageStyle } from './indexStyle';
import { useState } from 'react';
import { FindWithMe } from 'components/Sidebar/Sidebar';
import { sidebarStyle } from 'components/Sidebar/SidebarStyle';
import { squareButtonStyle } from 'style/common';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
const TEXT_DEFINE = ['Frontend Developer.', 'Professional Coder.'];

const HomePage = () => {
  const [textIndex, setTextIndex] = useState<number>(1);

  const handleChangeText = () => {
    const length = TEXT_DEFINE.length;
    if (textIndex < length - 1) {
      setTextIndex((prev) => prev + 1);
    } else {
      setTextIndex(0);
    }
  };

  return (
    <>
      <div css={homePageStyle.self}>
        <div css={homePageStyle.information}>
          <span css={homePageStyle.title}>WELCOME TO MY WORLD</span>
          <h1 css={homePageStyle.introduce}>
            Hi, I'm <span>Pham Van Dat</span>
            <br />
            <span>a&nbsp;</span>
            <span
              css={homePageStyle.subText}
              onAnimationIteration={handleChangeText}
            >
              {TEXT_DEFINE[textIndex]}&nbsp;
            </span>
          </h1>
          <p css={homePageStyle.description}>
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I'm not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
          <div css={homePageStyle.socialAndSkill}>
            <div>
              <FindWithMe />
            </div>
            <div css={sidebarStyle.findWithMe}>
              <span>BEST SKILL ON</span>
              <ul css={sidebarStyle.socialList}>
                <li css={squareButtonStyle}>
                  <AiFillHtml5 />
                </li>
                <li css={squareButtonStyle}>
                  <IoLogoCss3 />
                </li>
                <li css={squareButtonStyle}>
                  <IoLogoJavascript />
                </li>
                <li css={squareButtonStyle}>
                  <FaReact />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div css={homePageStyle.picture}>
          {/* <img src={IMAGES.PICTURE_PROFILE} alt="profile" /> */}
          <img
            src='https://a.cdn-hotels.com/gdcs/production154/d1245/0a3c326f-cedf-4cf9-ada2-71f7517d0a09.jpg'
            alt='profile'
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
