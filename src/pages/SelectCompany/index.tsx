import React from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import background from '../../assets/backgroundImg.svg';

import vivo from '../../assets/vivo.png';

import { Container, MainContainer, CompanyContainer, Background } from './styles';
import Triangle from '../../components/Triangle';
import FooterImage from '../../components/FooterImage';

const SelectCompany: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <MainContainer>
          <h1>Qual a empresa a ser contatada?</h1>
          <Input />
        </MainContainer>
        <CompanyContainer>
          <ul className="items-grid">
            <li>
                <img src={vivo} alt="Vivo"/>
                <span>Vivo</span>
            </li>
            <li>
                <img src={vivo} alt="Vivo"/>
                <span>Vivo</span>
            </li>
            <li>
                <img src={vivo} alt="Vivo"/>
                <span>Vivo</span>
            </li>          <li>
                <img src={vivo} alt="Vivo"/>
                <span>Vivo</span>
            </li>          <li>
                <img src={vivo} alt="Vivo"/>
                <span>Vivo</span>
            </li>
          </ul>
        </CompanyContainer>
        <span>Mais</span>
        <Triangle />
        <FooterImage />
      </Container>
    </>
  );
}

export default SelectCompany;