import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .footerImg {
    position: absolute;
    width: 100%;
    height: 500px;
    bottom: 0;
    z-index: -1;
  }

  + span {
    margin-top: 50px;
    color: #fff;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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
align-items: flex-start;
justify-content: flex-end;
margin-top: 30px;
width: 100%;
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
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    background: #f5f5f5;
    border-radius: 16px;
    border-bottom: 3px solid #d3d3d3;
    height: 100px;
    
    a{
      width: 100%;
      height: 50%;
      text-decoration: none;
    }

    h1{
      display: flex;
      align-self: flex-start;
      color: #FB6C02;
      border-top: 2px solid #FB6C02;
      margin-left: 10px;
      margin-right: 10px;
      font-size: 16px;
      margin-bottom: 20px;
    }

    h2{
      display: flex;
      align-self: flex-start;
      color: #FB6C02;
      margin-left: 10px;
      margin-top: 60px;
      font-size: 16px;
    }

    cursor: pointer;
  }
  
  .items-grid li.selected {
    background: #E1FAEC;
    border: 2px solid #34CB79;
  }
`;

export const LiContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  width: 95%;
  height: 100px;
  
  span {
    color: #FB6C02;
  }
`;

