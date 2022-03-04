import React from 'react';
import CounterConfig from '../../components/CounterConfig';
import Header from '../../components/Header';

import {
  Container,
  ContainerCountersConfig,
  AddCounter,
  TextAddCounter,
} from './styles';

const title = 'Config';

const Config = () => {
  return (
    <Container>
      <Header title={title} />
      <AddCounter>
        <TextAddCounter>Add Counter</TextAddCounter>
      </AddCounter>
      <ContainerCountersConfig>
        <CounterConfig />
        <CounterConfig />
      </ContainerCountersConfig>
    </Container>
  );
};

export default Config;
