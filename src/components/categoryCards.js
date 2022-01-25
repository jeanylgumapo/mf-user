import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
// import { globalStyles } from '../../styles/global';

export default function CategoryCard(title, source){
    return(
        <View style={globalStyles}>
            <Image size="24" source={source}/>
            <Text>{title}</Text>
        </View>
    )
}
