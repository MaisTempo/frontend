import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, MainContainer, CompanyContainer, LiContent, Wrapper } from './styles';
import BottomTriangle from '../../components/BottomTriangle';
import RightTriangle from '../../components/RightTrangle';
import FooterImage from '../../components/FooterImage';
import api from '../../services/api';
import { Link } from 'react-router-dom';

interface IOptions {
  descricao: string;
  name: string;
  _id: string;
}

const SelectHelp: React.FC = () => {
  const [options, setOptions] = useState<IOptions[]>([]);
  
  useEffect(() => {
    const id = localStorage.getItem('companyId');

    async function loadOptions() {
      const response = await api.get(`/finalidades/${id}`);

      console.log(response.data);
      setOptions(response.data);
    }

    loadOptions();
  }, []);

  const handleOptionClick = useCallback((id: string) => {
    console.log(id)
    localStorage.setItem('optionId', id);
  }, []);

  return (
    <>
      <Container>
        <Header />
        <Wrapper>
          <MainContainer>
            <h1>Como podemos te ajudar?</h1>
            <Input />
          </MainContainer>
          <CompanyContainer>
            <ul className="items-grid">
              {options.map(option => (
                <li key={option._id}>
                    <Link to="/finalidades/escolha">     
                      <LiContent onClick={() => handleOptionClick(option._id)}>
                        <span>{option.name}</span>
                          <RightTriangle
                            color={"FB6C02"}
                            onClick={() => handleOptionClick(option._id)}
                          />
                      </LiContent>
                    </Link>
                  <h1>{option.descricao}</h1>
                </li>
              ))}
            </ul>
          </CompanyContainer>
          <span>Mais</span>
          <BottomTriangle color={"fff"}/>
          <FooterImage />
        </Wrapper>
      </Container>
    </>
  );
}

export default SelectHelp;