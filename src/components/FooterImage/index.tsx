import React from 'react';

import background from '../../assets/backgroundImg.svg';
import { Container } from './styles';

const FooterImage: React.FC = () => {
  return (
    <Container>
      <img src={background} alt="Backgrond" />
    </Container>
  );
}

export default FooterImage;