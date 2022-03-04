import React, {useState, useEffect} from 'react';
import {Container, Title, Value} from './styles';

export interface ICounterProps {
  title: string;
  value?: number;
}

const Counter: React.FC<ICounterProps> = ({title = 'Counters', value = 0}) => {
  const [valueCount, setValueCount] = useState(0);

  useEffect(() => {
    setValueCount(value);
  }, []);

  function handlePressCounter() {}

  return (
    <Container onPress={handlePressCounter}>
      <Title>{title}</Title>
      <Value>{valueCount}</Value>
    </Container>
  );
};

export default Counter;
