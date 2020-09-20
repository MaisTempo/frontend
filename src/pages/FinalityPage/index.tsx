import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, MainContainer, CompanyContainer } from './styles';
import Triangle from '../../components/BottomTriangle';
import FooterImage from '../../components/FooterImage';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const SelectHelp: React.FC = () => {
  const [optionName, setOptionName] = useState('');

  useEffect(() => {
    async function loadCompanys() {
      const id = localStorage.getItem('optionId');
      const response = await api.get(`/finalidades/id/${id}`);

      console.log(response.data);

      setOptionName(response.data.name);
    }
    loadCompanys();
  }, []);

  const handleCompanySelection = useCallback((id: string) => {
    localStorage.setItem('companyId', id);
  }, [])

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
                <Button type="button">Prosseguir</Button>
              </li>
              <li>
                <h1>Passo a passo</h1>
                <p>Na sua mão os passos para solucionar seu problema. Aprenda a passar rapidamente pelo atendimento automático. Economize tempo e seja atendido com agilidade.</p>
                <Button type="button">Prosseguir</Button>
              </li>
            </ul>
        </CompanyContainer>
        <FooterImage />
      </Container>
    </>
  );
}

export default SelectHelp;