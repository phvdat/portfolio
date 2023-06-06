/** @jsxImportSource @emotion/react */

import { horizontalLine } from 'style/common';
import HomePage from './home';
import FeaturesPage from './features';

const IndexPage = () => {
  return (
    <>
      <section>
        <HomePage />
        <div css={horizontalLine}></div>
      </section>
      <section>
        <FeaturesPage />
      </section>
    </>
  );
};

export default IndexPage;
