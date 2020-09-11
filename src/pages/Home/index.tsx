import React from 'react';
import { Container, ContainerItems } from './styles';
import { CardInfo } from './components';


export function HomeScreen() {
  return (
    <Container >     
        <CardInfo labelInfo="Novos confirmados" value="10000" />
        <CardInfo labelInfo="Total confirmados" value="10000" />
        <CardInfo labelInfo="Novas mortes" value="10000" />
        <CardInfo labelInfo="Total mortes" value="10000" />
        <CardInfo labelInfo="Novos recuperados" value="10000" />
        <CardInfo labelInfo="Total recuperados" value="10000" />      
    </Container>
  );
}

