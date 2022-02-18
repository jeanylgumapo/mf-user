import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { MaterialCommunityIcons, AntDesign  } from '@expo/vector-icons'; 

export default function ServiceCard({label}){
    return(
            <View style={tailwind`bg-primary   items-center rounded-2xl  px-4 py-8 h-40 w-44 m-2`}>          
                <Text style={tailwind`text-3xl font-bold text-white`}> {label}</Text>
            </View>
    )
}
