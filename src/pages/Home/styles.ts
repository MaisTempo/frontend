import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  .footerImg {
    position: absolute;
    right: 0;
    z-index: -1;
  }

  span {
    margin-top: 50px;
    color: #fff;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Header = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    text-decoration: none;
  }

  ul li {
    font-size: 20px;
    margin-right: 30px;
    margin-left: 40px;
    color: #000;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;

  & + img {
    width: 100%;
    margin-left: 200px;
    height: 600px;
    margin-right: 0;
  }

`;

export const CompanyContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
margin-top: 30px;
margin-left: 200px;
width: 20%;
height: 700px;
padding-top: 20px;

p {
  color: #000;
  font-size: 20px;
}
`;

export const SideImageContainer = styled.div`
  img {
    width: 100%;
  height: 600px;
  }
`;

export const FooterImage = styled.div`
  position: absolute;
  z-index: -2;
  width: 100vh;
  right: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;
