import React from 'react';
import { View, Text } from 'react-native';
import {CardInfoContainer, TextLabelInfo, TextValue} from './styles'

export function CardInfo(props: any){

    return (       
        <CardInfoContainer>
            <TextLabelInfo>{props.labelInfo}</TextLabelInfo>
            <TextValue>{props.value}</TextValue>
        </CardInfoContainer>
    );
    
} 