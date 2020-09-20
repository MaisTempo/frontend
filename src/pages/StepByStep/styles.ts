import styled from 'styled-components';

import background from '../../assets/backgroundImg.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  .footerImg {
    position: absolute;
    width: 100%;
    height: 500px;
    bottom: 0;
    z-index: -1;
  }

  span {
    margin-top: 50px;
    color: #fff;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  h1 {
    color: #FB6C02;
  }
`;

export const CompanyContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
width: 50%;
background: 000;
height: 400px;
border-top: 3px solid #FB6C02; 
padding-top: 20px;

ul a {
  text-decoration: none;
}

.items-grid {
  display: grid;
  height: 100%;
  width: 60%;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 100px;
  list-style: none;

  @media(max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 200px;
    list-style: none;
  }
}

.items-grid li {
  background: #f5f5f5;
  border: 2px solid #f5f5f5;
  height: 400px;
  border-radius: 8px;
  padding: 32px 24px 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  text-align: center;

  cursor: pointer;
}

.items-grid li h1 {
  font-size: 25px;
  color: #000;
}

.items-grid li p {
  margin-top: 0;
  text-indent: 1.5;
  font-size: 14px;
  color: #FB6C02;
  text-align: center;;
}

.items-grid li img {
  width: 100%;
  height: 100px;
}

.items-grid li span {
  flex: 1;
  margin-top: 12px;
  display: flex;
  align-items: center;
  color: #000;
}

.items-grid li.selected {
  background: #E1FAEC;
  border: 2px solid #34CB79;
}
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: 1000px;
`;