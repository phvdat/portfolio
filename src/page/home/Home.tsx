/** @jsxImportSource @emotion/react */

import { IMAGES } from 'constants/image';
import { homeStyle } from './HomeStyle';
import { useState } from 'react';
import { squareButtonStyle } from 'style/common';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { NAME } from 'constants/common';
import { FindWithMe } from 'components/FindWithMe/FindWithMe';
import { findWithMeStyle } from 'components/FindWithMe/FindWithMeStyle';
const TEXT_DEFINE = ['Frontend Developer.', 'Professional Coder.'];

const Home = () => {
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
      <div css={homeStyle.self}>
        <div css={homeStyle.information}>
          <span css={homeStyle.title}>WELCOME TO MY WORLD</span>
          <h1 css={homeStyle.introduce}>
            Hi, I'm <span>{NAME}</span>
            <br />
            <span>a&nbsp;</span>
            <span
              css={homeStyle.subText}
              onAnimationIteration={handleChangeText}
            >
              {TEXT_DEFINE[textIndex]}&nbsp;
            </span>
          </h1>
          <p css={homeStyle.description}>
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I'm not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
          <div css={homeStyle.socialAndSkill}>
            <div data-aos='fade-right'>
              <FindWithMe />
            </div>
            <div css={findWithMeStyle.self} data-aos='fade-left'>
              <span>BEST SKILL ON</span>
              <ul css={findWithMeStyle.socialList}>
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
        <div css={homeStyle.picture}>
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

export default Home;
