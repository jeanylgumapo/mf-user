import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { MaterialCommunityIcons, AntDesign  } from '@expo/vector-icons'; 

export default function CategoryCard({label}){
    return(
            <View style={tailwind`bg-gray-50  drop-shadow  border-gray-50 border-2 items-center rounded-2xl py-8 px-2 m-2 w-24`}>
                <MaterialCommunityIcons name="engine-outline" size={32} color="#333" />
                <Text style={tailwind`text-xs text-gray-600`}> {label}</Text>
            </View>
    )
}
