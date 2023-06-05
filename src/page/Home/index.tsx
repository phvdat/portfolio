/** @jsxImportSource @emotion/react */

import { IMAGES } from "constants/image";
import { homePageStyle } from "./indexStyle";
import { useEffect, useState, useRef } from "react";

const HomePage = () => {
  const [textIndex, setTextIndex] = useState<number>(1);
  const refText = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const changeTextInterval = setInterval(() => {
      if (textIndex < 3) {
        setTextIndex((prev) => prev + 1);
      } else {
        setTextIndex(1);
      }
    }, 2000);
    if (refText.current) {
      refText.current.style.height = "0px";
    }
    return () => {
      clearInterval(changeTextInterval);
    };
  }, [textIndex]);

  return (
    <>
      <div css={homePageStyle.self}>
        <div css={homePageStyle.information}>
          <span css={homePageStyle.title}>WELCOME TO MY WORLD</span>
          <h1 css={homePageStyle.description}>
            Hi, I'm <span>Pham Van Dat</span>
            <br />
            <span>a&nbsp;</span>
            <div ref={refText}>
              <span css={homePageStyle.subText} aria-hidden={textIndex !== 1}>
                Frontend Developer
              </span>
              <span css={homePageStyle.subText} aria-hidden={textIndex !== 2}>
                Professional Coder
              </span>
              <span css={homePageStyle.subText} aria-hidden={textIndex !== 3}>
                Vietnamese
              </span>
            </div>
          </h1>
        </div>
        <div css={homePageStyle.picture}>
          <img src={IMAGES.PICTURE_PROFILE} alt="profile" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
