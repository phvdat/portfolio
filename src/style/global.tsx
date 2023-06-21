import { css, Global } from '@emotion/react';
import { root, themeDark, themeLight } from './theme-variables';

const reset = css`
  * {
    font-family: Montserrat, sans-serif;
    box-sizing: inherit;
  }

  *:not(.non-reset *) {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    overflow-y: scroll;
    font-size: 1.6rem;
    line-height: 1.3;
    font-weight: 400;
    box-sizing: border-box;
    background-color: var(--background-primary);
    color: var(--text-primary);
    transaction: 'all 1s ease-out';
    touch-action: manipulation;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const resetTag = css`
  a {
    display: inline-block;
    text-decoration: none;
  }

  span,
  strong,
  small {
    display: inline-block;
  }

  p {
    word-break: break-word;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  input:-webkit-autofill {
    -webkit-background-clip: text;
  }
  a,
  p,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--text-primary);
    padding: 0;
  }
  textarea {
    resize: none;
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: var(--background-tertiary);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

const keyframes = css`
  @keyframes ripple {
    0% {
      box-shadow: 0px 0px 0px 1px rgba(250, 204, 21, 0.3);
    }
    50% {
      box-shadow: 0px 0px 0px 4px rgba(255, 204, 21, 0.3);
    }
    100% {
      box-shadow: 0px 0px 0px 12px rgba(0, 0, 0, 0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    60% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    60% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const GlobalStyles = () => {
  return (
    <>
      <Global
        styles={[root, reset, resetTag, keyframes, themeDark, themeLight]}
      />
    </>
  );
};

export default GlobalStyles;
