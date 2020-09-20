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
    color: #000000;
  }
`;

export const CompanyContainer = styled.div`
display: flex;
align-items: center;
margin-top: 30px;
width: 50%;
height: 400px;
border-top: 3px solid #FB6C02; 
padding-top: 20px;

 .items-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    list-style: none;
    width: 100%;
    height: 100%;
  }
  
  .items-grid li {
    display: flex;
    align-items: center;
    background: #f5f5f5;
    height: 50px;
    border-radius: 16px;
    border-bottom: 3px solid #d3d3d3;

    cursor: pointer;
  }

  .items-grid li span {
    display: flex;
    width: 100%;
    height: 100%;
    margin-left: 10px;
    color: #FB6C02;
  }
  
  .items-grid li.selected {
    background: #E1FAEC;
    border: 2px solid #34CB79;
  }
`;

export const LiContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin-right: 15px;
`;