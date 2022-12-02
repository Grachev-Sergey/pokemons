import { useState } from 'react';

import { FooterContainer } from './Footer.styles';

const Footer = () => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const changeWindowWidth = () => {
    setWindowInnerWidth(document.documentElement.clientWidth);
  };
  window.onresize = changeWindowWidth;

  return (
    <FooterContainer>
      <p className="screen-width">{windowInnerWidth}</p>
    </FooterContainer>
  );
};

export default Footer;
