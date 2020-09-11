import React from 'react';
import { ContainerItemCountry, TextNameCountry, TextCodeCountry} from './styles'
import { View } from 'react-native';

interface ItemProps {
    name: string,
    code: string
}

export function ItemCountry({ name, code }: ItemProps) {
    return (
        <ContainerItemCountry>
            <TextNameCountry>{name}</TextNameCountry>
            <TextCodeCountry>{code}</TextCodeCountry>
        </ContainerItemCountry>
    );
}

