import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';

import { Container, MainContainer, CompanyContainer } from './styles';
import FooterImage from '../../components/FooterImage';
import api from '../../services/api';

interface ISteps {
  fluxo: string[];
}

const StepByStep: React.FC = () => {
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
        <Header />
        <MainContainer>
          <h1>{optionName}</h1>
        </MainContainer>
        <CompanyContainer>
            <ul className="items-grid">
                <li>
                  {steps.map(step => (
                    <>
                      <h1>{step}</h1>
                    </>
                  ))}
                  <p>As informações sobre a ação serão enviadas por sms</p>
                </li>
            </ul>
        </CompanyContainer>
        <FooterImage />
      </Container>
    </>
  );
}

export default StepByStep;