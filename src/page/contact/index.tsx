/** @jsxImportSource @emotion/react */

import { IMAGES } from 'constants/image';
import { contactStyle } from './indexStyle';
import { EMAIL } from 'constants/common';
import { FindWithMe } from 'components/Sidebar/Sidebar';

const Contact = () => {
  return (
    <div css={contactStyle.self}>
      <h1 css={contactStyle.title}>My Resume</h1>
      <div css={contactStyle.container}>
        <div css={contactStyle.left}>
          {/* <img src={IMAGES.PICTURE_PROFILE} alt='profile' /> */}
          <img
            src='https://a.cdn-hotels.com/gdcs/production154/d1245/0a3c326f-cedf-4cf9-ada2-71f7517d0a09.jpg'
            alt='profile'
          />
          <h2 css={contactStyle.name}>Pham Van Dat</h2>
          <span css={contactStyle.position}>Developer</span>
          <p css={contactStyle.infoDescription}>
            I am available for freelance work. Connect with me via and call in
            to my account.
          </p>
          <span css={contactStyle.email}>
            Email: <a href={`mailto:{EMAIL}`}>{EMAIL}</a>
          </span>
          <FindWithMe />
        </div>
        <div css={contactStyle.right}></div>
      </div>
    </div>
  );
};

export default Contact;
