import styled, { css } from 'styled-components';

interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  width: 0; 
  height: 0; 

  ${props => props.color === 'fff' && css `
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid #fff;
  `}

  ${props => props.color === 'FB6C02' && css `
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid #FB6C02;
  `}  
`;
