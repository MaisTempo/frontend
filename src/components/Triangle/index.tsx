import React from 'react'

import { Container } from './styles';

interface TriangleProps {
  color: string;
}

const Triangle: React.FC<TriangleProps> = ({ color }) => (
  <Container color={color}/> 
);

export default Triangle;