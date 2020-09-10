import styled from 'styled-components/native';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const CardInfoContainer = styled.View`
        width: 150px;
        padding: 10px;        
        justify-content: space-between;
        margin: ${windowHeight * 0.04}px ${windowHeight * 0.02}px;
        align-items: center;
        border-radius: 10px;
        background:#F5F5F5; 
`;


export const TextLabelInfo = styled.Text`
   margin-bottom: 20px;
   font-weight: bold;
`;

export const TextValue = styled.Text`
    font-size: 22px;
    color: #0cd387;
    margin-bottom: 20px;

`;