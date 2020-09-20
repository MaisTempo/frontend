import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, MainContainer, CompanyContainer } from './styles';
import Triangle from '../../components/BottomTriangle';
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

      setCompany(response.data);
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
          <h1>Qual empresa a ser contatada?</h1>
          <Input />
        </MainContainer>
        <CompanyContainer>
            <ul className="items-grid">
              {companies.map(company => (
                <Link
                  onClick={() => handleCompanySelection(company._id)}
                  to={`finalidades`}
                  key={company._id}
                >
                  <li>
                      <img src={company.url} alt="Vivo"/>
                      <span>{company.name}</span>
                  </li>
                </Link>
              ))}
            </ul>
        </CompanyContainer>
        <span>Mais</span>
        <Triangle color={"fff"}/>
        <FooterImage />
      </Container>
    </>
  );
}

export default SelectCompany;