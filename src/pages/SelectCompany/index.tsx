import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import background from '../../assets/backgroundImg.svg';

import vivo from '../../assets/vivo.png';

import { Container, MainContainer, CompanyContainer, Background } from './styles';
import Triangle from '../../components/Triangle';
import FooterImage from '../../components/FooterImage';
import api from '../../services/api';
import { Link } from 'react-router-dom';

interface ICompany {
  _id: string;
  name: string;
  url: string;
}

const SelectCompany: React.FC = () => {
  const [companies, setCompany] = useState<ICompany[]>([]);

  useEffect(() => {
    async function loadCompanys() {
      const response = await api.get('/entidades');

      console.log(response.data);
      setCompany(response.data);
    }
    loadCompanys();
  }, []);

  const handleCompanySelection = useCallback((id: string) => {
    
  }, [])

  return (
    <>
      <Container>
        <Header />
        <MainContainer>
          <h1>Qual a empresa a ser contatada?</h1>
          <Input />
        </MainContainer>
        <CompanyContainer>
          {companies.map(company => (
            <Link to={`finalidades/${company._id}`}>
              <ul key={company._id} className="items-grid">
                <li>
                    <img src={company.url} alt="Vivo"/>
                    <span>{company.name}</span>
                </li>
              </ul>
            </Link>
          ))}
        </CompanyContainer>
        <span>Mais</span>
        <Triangle color={"fff"}/>
        <FooterImage />
      </Container>
    </>
  );
}

export default SelectCompany;