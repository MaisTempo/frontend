import React, { useEffect, useState } from 'react';

import { 
  Container,
  MainContainer,
  CompanyContainer,
  Header,
  FooterImage,
  HeaderContainer,
  SideImageContainer,
} from './styles';

import api from '../../services/api';
import Input from '../../components/Input';

import backgroundHome from '../../assets/backgroundHome.svg';
import Robot from '../../assets/robo.png';
import logoImg from '../../assets/Logo_1.svg';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

interface ISteps {
  fluxo: string[];
}

const Home: React.FC = () => {
  const [steps, setSteps] = useState<ISteps[]>([]);
  const [optionName, setOptionName] = useState('');

  useEffect(() => {
    async function loadSteps() {
      const id = localStorage.getItem('optionId');
      const response = await api.get(`/finalidades/id/${id}`);

      console.log(response.data.fluxo);

      setOptionName(response.data.name);
      setSteps(response.data.fluxo);
    }
    loadSteps();
  }, [setOptionName]);

  return (
    <>
      <Container>
        <HeaderContainer>
          <Header>
            <Input />
            <ul>
              <li>Sobre</li>
              <li>Parcerias</li>
              <li>Contato</li>
            </ul>
          </Header>
        </HeaderContainer>

        <MainContainer>

          <CompanyContainer>
            <img src={logoImg} alt="Robo"/>
            <p>Economize seu tempo e acabe com aqueles atendimentos automatizados que parecem nunca ter fim. Venha conhecer sua plataforma que te ajuda a escolher os passos certos para você em pouco tempo ter a solução para o seu problema ou questão.
Clique em começar e salve seu tempo com a gente!</p>
            <Link to="start">
              <Button type="button">Começar</Button>
            </Link>
          </CompanyContainer>

          <SideImageContainer>
            <img src={Robot} alt="Robo"/>
          </SideImageContainer>

        </MainContainer>
        
        <FooterImage>
          <img src={backgroundHome} alt="Background"/>
        </FooterImage>
      </Container>
    </>
  );
}

export default Home;