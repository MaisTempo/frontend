import React from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, MainContainer, CompanyContainer, LiContent } from './styles';
import Triangle from '../../components/Triangle';
import FooterImage from '../../components/FooterImage';

const SelectHelp: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <MainContainer>
          <h1>Como podemos te ajudar?</h1>
          <Input />
        </MainContainer>
        <CompanyContainer>
          <ul className="items-grid">
            <li>
                <LiContent>
                  <span>Vivo - Adicionar crédito - Plano Pré</span>
                  <Triangle color={"FB6C02"}/>
                </LiContent>
            </li>
            <li>
               <LiContent>
                <span>Vivo - Adicionar crédito - Plano Pré</span>
                <Triangle color={"FB6C02"}/>
              </LiContent>
            </li>
            <li>
              <LiContent>
                <span>Vivo - Adicionar crédito - Plano Pré</span>
                <Triangle color={"FB6C02"}/>
              </LiContent>
            </li>          
            <li>
              <LiContent>
                <span>Vivo - Adicionar crédito - Plano Pré</span>
                <Triangle color={"FB6C02"}/>
              </LiContent>
            </li>          
            <li>
              <LiContent>
                <span>Vivo - Adicionar crédito - Plano Pré</span>
                <Triangle color={"FB6C02"}/>
              </LiContent>
            </li>
          </ul>
        </CompanyContainer>
        <span>Mais</span>
        <Triangle color={"fff"}/>
        <FooterImage />
      </Container>
    </>
  );
}

export default SelectHelp;