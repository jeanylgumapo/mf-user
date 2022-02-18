import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export default function FavoriteCard({label, onPress}){
    return(
        <View style={tailwind`flex-row border-b-2 border-gray-50 p-8`}>
            <Image style={tailwind`rounded-20 w-12 h-12 `} source ={require('../../assets/user.png')}/> 
            <View style={tailwind`flex-col`}>
                <View style={tailwind`flex-row`}>
                <View style={tailwind`w-2/4 items-start`}>
                    <Text style={tailwind`font-bold text-lg`}> Eddie Gendraule</Text>
                </View>
                <View style={tailwind`w-2/4 items-end px-8`}>
                    <TouchableOpacity  onPress={onPress}>
                        <Text style={tailwind`font-bold text-primary-color text-xs`}>View Profile>></Text>
                    </TouchableOpacity>
                </View>
                </View>                           
                <Text> What's included. Oil FIlter and CHeckup</Text>
                <View style={tailwind`flex-row`}>
                    <AntDesign name="star" size={14} color="yellow" />
                    <AntDesign name="star" size={14} color="yellow" />
                    <AntDesign name="star" size={14} color="yellow" />
                    <FontAwesome name="star-half-empty" size={14} color="yellow" />
                    <FontAwesome name="star-o" size={14} color="yellow" />
                </View>
            </View>
     </View>
    )
}
