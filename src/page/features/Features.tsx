/** @jsxImportSource @emotion/react */

import { featureStyle } from './FeaturesStyle';

const Feature = () => {
  return (
    <div css={featureStyle.self}>
      <span css={featureStyle.title}>WELCOME TO MY WORLD</span>
    </div>
  );
};

export default Feature;
