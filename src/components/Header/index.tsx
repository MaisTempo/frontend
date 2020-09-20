import React, { useEffect } from 'react';

import Logo from '../../assets/Logo_1.svg';
import { Container, SideContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Mais Tempo"/>
      <SideContainer>
        <h1>Sobre</h1>
        <h1>Parcerias</h1>
        <h1>Contato</h1>
      </SideContainer>
    </Container>
  );
}

export default Header;