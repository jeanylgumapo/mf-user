import React from 'react';
import {Text, View, Image} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';

const ServicesPanel = () => {
    return (
        <View style={tailwind`px-8 border-b-2 border-gray-50 flex-row items-center`}>
            <Image style={tailwind`w-14 h-14 m-2`} source ={require('../../assets/oilchange.png')}/> 
            <View style={tailwind`m-2`}>
                <Text style={tailwind`text-base text-black font-bold`}> Oil Change</Text>
                <Text style={tailwind`text-xs text-gray-400`}>Php 1,800.00</Text>
                <Text style={tailwind`text-xs text-gray-400`}>What's Included</Text>
                <Text style={tailwind`text-xs text-gray-400`}>6 Lites Delo Oil, Filter & Labor</Text>
            </View>         
        </View>
    )
};

export default ServicesPanel;