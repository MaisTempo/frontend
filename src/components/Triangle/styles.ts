import styled, { css } from 'styled-components';

interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  width: 0; 
  height: 0; 

  ${props => props.color === 'fff' && css `
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 30px solid #fff
  `}

  ${props => props.color === 'FB6C02' && css `
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid #FB6C02
  `}  
`;
