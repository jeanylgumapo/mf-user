import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import FavoriteCard from '../../components/FavoriteCard';


const FavoriteScreen = ({navigation}) => {
    return (
        <View style={tailwind`flex`}>
            <View style={tailwind`h-full bg-white p-4`}>
                <Text style={tailwind`text-lg font-bold`}>Previously you liked</Text>   
                <FavoriteCard onPress={()=> navigation.navigate('SpProfile')}/>
                <FavoriteCard onPress={()=> navigation.navigate('SpProfile')}/>
            </View>
        </View>
    )
};

export default FavoriteScreen;