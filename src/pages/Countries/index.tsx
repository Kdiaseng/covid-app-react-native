import { View, Text, FlatList } from 'react-native'
import React from 'react';
import { ContainerCountriesMain } from './styles'
import {ItemCountry} from './components/itemCountry'

export function Countries() {

    return (
        <ContainerCountriesMain>
            <FlatList
                data={[
                    { name: 'name', code: 'code' },
                    { name: 'name', code: 'code' },
                    { name: 'name', code: 'code' },
                    { name: 'name', code: 'code' },
                    { name: 'name', code: 'code' },
                    { name: 'name', code: 'code' },
                    { name: 'name', code: 'code' },
                    { name: 'name', code: 'code' },
                    { name: 'name', code: 'code' },
                ]}
            renderItem= {({item}) => <ItemCountry {...item} />}
                
                />

        
        </ContainerCountriesMain>
    );
}