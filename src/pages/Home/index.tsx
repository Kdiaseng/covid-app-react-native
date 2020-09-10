import React from 'react';
import { Text, View } from 'react-native';
import { Container, ContainerItems } from './styles';
import { CardInfo } from './components';
import styled from 'styled-components/native';


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

