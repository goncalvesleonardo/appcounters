import React from 'react';

import {
  Container,
  Title,
  Increment,
  Decrement,
  Remove,
  TextDecrement,
  TextIncrement,
  TextRemove,
  ContainerControls,
} from './styles';

const CounterConfig = () => {
  return (
    <Container>
      <Title>Counter 1</Title>
      <ContainerControls>
        <Increment>
          <TextIncrement>+</TextIncrement>
        </Increment>
        <Decrement>
          <TextDecrement>-</TextDecrement>
        </Decrement>
        <Remove>
          <TextRemove>x</TextRemove>
        </Remove>
      </ContainerControls>
    </Container>
  );
};

export default CounterConfig;
