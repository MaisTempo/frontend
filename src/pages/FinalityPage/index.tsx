import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';

import { Container, MainContainer, CompanyContainer } from './styles';
import FooterImage from '../../components/FooterImage';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const SelectHelp: React.FC = () => {
  const [optionName, setOptionName] = useState('');

  useEffect(() => {
    const id = localStorage.getItem('optionId');

    async function loadOptionName() {
      const response = await api.get(`finalidades/id/${id}`)

      setOptionName(response.data.name);
    }
    loadOptionName();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <MainContainer>
          <h1>{optionName}</h1>
        </MainContainer>
        <CompanyContainer>
            <ul className="items-grid">
              <li>
                <h1>Assistência em tempo real</h1>
                <p>Assistência em tempo real acompanhando seu problema até a solução. Guiamos você e apresentamos os passos para solução com apenas alguns cliques.</p>
                <Link to="">
                  <Button type="button">Prosseguir</Button>
                </Link>
              </li>
              <li>
                <h1>Passo a passo</h1>
                <p>Na sua mão os passos para solucionar seu problema. Aprenda a passar rapidamente pelo atendimento automático. Economize tempo e seja atendido com agilidade.</p>
                <Link to="escolha/passoapasso">
                  <Button type="button">Prosseguir</Button>
                </Link>
              </li>
            </ul>
        </CompanyContainer>
        <FooterImage />
      </Container>
    </>
  );
}

export default SelectHelp;