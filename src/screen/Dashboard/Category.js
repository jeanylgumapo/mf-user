import React from 'react';
import {Text, View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import tailwind from 'tailwind-react-native-classnames';

const CategoryScreen = () => {
    return (
        <View >
            <Text> Service Category</Text>
            <View style={tailwind`flex flex-row flex-wrap p-4 items-center`}>
            
                <View style={tailwind`bg-primary category-card-size-1 m-2 items-center rounded-xl`}>
                    <MaterialCommunityIcons name="engine-outline" size={32} color="white" />
                    <Text style={tailwind`text-xs text-white`}> Maintenance</Text>
                </View>
                <View style={tailwind`bg-primary category-card-size-1 m-2 items-center rounded-xl`}>
                    <MaterialCommunityIcons name="engine-outline" size={32} color="white" />
                    <Text style={tailwind`text-xs text-white`}> Maintenance</Text>
                </View>
                <View style={tailwind`bg-primary category-card-size-1 m-2 items-center rounded-xl`}>
                    <MaterialCommunityIcons name="engine-outline" size={32} color="white" />
                    <Text style={tailwind`text-xs text-white`}> Maintenance</Text>
                </View>
                <View style={tailwind`bg-primary category-card-size-1 m-2 items-center rounded-xl`}>
                    <MaterialCommunityIcons name="engine-outline" size={32} color="white" />
                    <Text style={tailwind`text-xs text-white`}> Maintenance</Text>
                </View>
            </View>
        </View>
    )
};

export default CategoryScreen;