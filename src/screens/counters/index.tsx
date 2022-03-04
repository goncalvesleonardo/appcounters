import React from 'react';
import Header from '../../components/Header';
import Counter from '../../components/Counter';
import {Container} from './styles';

const title = 'Counters';

const Counters = () => {
  return (
    <Container>
      <Header title={title} />
      <Counter title="Counter 1" value={2000} />
    </Container>
  );
};

export default Counters;
