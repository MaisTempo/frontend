import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react'

import { Container } from './styles';

interface TriangleProps extends HTMLAttributes<HTMLDivElement>{
  color: string;
}

const Triangle: React.FC<TriangleProps> = ({ color, ...rest }) => (
  <Container color={color} {...rest}/> 
);

export default Triangle;