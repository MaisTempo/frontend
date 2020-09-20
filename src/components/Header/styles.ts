import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-between;

  img {
    width: 130px;
    height: 130px;
    margin-left: 60px;
  }
`;

export const SideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 60px;

  h1{
    margin-left: 60px;
    font-size: 20px;
    color: #000000;
  }
`;