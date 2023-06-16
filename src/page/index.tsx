/** @jsxImportSource @emotion/react */

import { horizontalLine } from 'style/common';
import Home from './home';
import Features from './features';
import { useCallback } from 'react';
import aos from 'aos';
import Resume from './resume';
import Contact from './contact';

const IndexPage = () => {
  useCallback(() => {
    aos.init();
  }, []);
  return (
    <>
      <section>
        <Home />
        <div css={horizontalLine}></div>
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Resume />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
};

export default IndexPage;
