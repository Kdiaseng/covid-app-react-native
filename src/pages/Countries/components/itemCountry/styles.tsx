
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ContainerProps {
    color?: string
}

export const ContainerItemCountry = styled.View<ContainerProps>`
    margin-top: 15px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    background: #F5F5F5;  
    border-radius: 10px; 
`;

export const TextNameCountry = styled.Text`
        font-size: 25px;
        color: #0cd387;
`;

export const TextCodeCountry = styled(TextNameCountry)`
    font-size: 16px;
`;

export const ContainerFavorityCountry = styled.View`
    
`;