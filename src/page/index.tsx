/** @jsxImportSource @emotion/react */

import { circleButtonStyle, horizontalLine } from 'style/common';
import Home from './home/Home';
import Features from './features/Features';
import { useCallback } from 'react';
import aos from 'aos';
import Resume from './resume/Resume';
import Contact from './contact/Contact';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { indexStyle } from './indexStyle';

const IndexPage = () => {
  useCallback(() => {
    aos.init();
  }, []);
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <section>
        <Home />
        <div css={horizontalLine}></div>
      </section>
      <section>
        <Features />
        <div css={horizontalLine}></div>
      </section>
      <section>
        <Resume />
        <div css={horizontalLine}></div>
      </section>
      <section>
        <Contact />
        <div css={horizontalLine}></div>
      </section>
      <button
        css={[circleButtonStyle, indexStyle.backToTopBtn]}
        onClick={handleBackToTop}
      >
        <AiOutlineArrowUp />
      </button>
    </>
  );
};

export default IndexPage;
