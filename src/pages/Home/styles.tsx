import styled from 'styled-components/native';
import { Dimensions } from 'react-native';


let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;


export const Container = styled.View`    
    flex: 1;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    background: #DDE5E5;
    width: ${windowWidth * 1}px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;


export const ContainerItems = styled.View` 
    flex: 1;   
    width: ${windowWidth * 0.9}px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background: #08ebd2;
`;


