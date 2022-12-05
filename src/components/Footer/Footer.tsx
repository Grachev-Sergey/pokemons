import useWindowInnerWidth from '../../utils/useWindowInnerWidth';

import { FooterContainer } from './Footer.styles';

const Footer = () => {
  const width = useWindowInnerWidth(window.innerWidth);

  return (
    <FooterContainer>
      <p className="screen-width">{width}</p>
    </FooterContainer>
  );
};

export default Footer;
