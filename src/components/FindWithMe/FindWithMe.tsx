/** @jsxImportSource @emotion/react */
import { FiFacebook } from 'react-icons/fi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { findWithMeStyle } from './FindWithMeStyle';
import { squareButtonStyle } from 'style/common';
import { Link } from 'react-router-dom';

export const FindWithMe = () => {
  return (
    <div css={findWithMeStyle.self}>
      <span>FIND WITH ME</span>
      <ul css={findWithMeStyle.socialList}>
        <li css={squareButtonStyle}>
          <Link to={'/'}>
            <FiFacebook />
          </Link>
        </li>
        <li css={squareButtonStyle}>
          <Link to={'/'}>
            <AiFillGithub />
          </Link>
        </li>
        <li css={squareButtonStyle}>
          <Link to={'/'}>
            <AiFillLinkedin />
          </Link>
        </li>
      </ul>
    </div>
  );
};
