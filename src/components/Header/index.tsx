import React from 'react';
import {Container, Title} from './styles';

export interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({title = 'Counters'}) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
