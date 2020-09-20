import React from 'react';

import { FiSearch } from 'react-icons/fi';
import { Container } from './styles';

const Input: React.FC = () => {
  return (
    <Container>
      <FiSearch size={25} color="FB7E21"/>
      <input/>
    </Container>
  );
}

export default Input;