import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';

const PolicyScreen = () => {
    return (
        <View style={tailwind`h-full bg-white`}>
            <View style={tailwind`m-4`}>
                <ScrollView>
                <Text style={tailwind`font-bold text-primary-color text-2xl my-2`}> Policies</Text>                
                    <View style={tailwind`m-2 p-4 border-gray-50 border-2 drop-shadow rounded`}>
                        <Text style={tailwind`font-bold text-lg`}>Services</Text>
                        <Text style={tailwind`text-xs text-gray-500`}>Lorem ipsum Lorem ipsum dolor sit amet</Text>
                    </View>
                    <View style={tailwind`m-2 p-4 border-gray-50 border-2 drop-shadow rounded`}>
                        <Text style={tailwind`font-bold text-lg`}>App</Text>
                        <Text style={tailwind`text-xs text-gray-500`}>Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sit amet</Text>
                    </View>
                    
                    <View style={tailwind`m-2 p-4 border-gray-50 border-2 drop-shadow rounded`}>
                        <Text style={tailwind`font-bold text-lg`}>Appointments</Text>
                        <Text style={tailwind`text-xs text-gray-500`}>Lorem ipsum dolor sit amet amet, tritani luptatum similique ad nec.</Text>
                    </View>

                    <View style={tailwind`m-2 p-4 border-gray-50 border-2 drop-shadow rounded`}>
                        <Text style={tailwind`font-bold text-lg`}>Others</Text>
                        <Text style={tailwind`text-xs text-gray-500`}>Lorem ipsum dolor sit amet amet, tritani luptatum similique ad nec.</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
};

export default PolicyScreen;