import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';

const AboutScreen = () => {
    return (
        <View style={tailwind`h-full bg-white`}>
            <View style={tailwind`m-4`}>
                <ScrollView>
                <Text style={tailwind`font-bold text-primary-color text-2xl my-2`}> About Mr. Fixxy</Text>
                
                <View style={tailwind`bg-primary m-2 rounded-2xl p-2 drop-shadow`}>
                    <Image style={tailwind`w-full h-48 rounded-20`} source ={require('../../../assets/logo-white.png')}/> 
                    </View>
                
                    <View style={tailwind`m-2 p-4 border-gray-50 border-2 drop-shadow rounded`}>
                        <Text style={tailwind`font-bold text-lg`}>How we started</Text>
                        <Text style={tailwind`text-xs text-gray-500`}>Lorem ipsum dolor sit amet</Text>
                    </View>
                    <View style={tailwind`m-2 p-4 border-gray-50 border-2 drop-shadow rounded`}>
                        <Text style={tailwind`font-bold text-lg`}>Make Your Vehicle A Priority</Text>
                        <Text style={tailwind`text-xs text-gray-500`}>Lorem ipsum dolor sit amet</Text>
                    </View>
                    
                    <View style={tailwind`m-2 p-4 border-gray-50 border-2 drop-shadow rounded`}>
                        <Text style={tailwind`font-bold text-lg`}>Book A Mechanic Instantly</Text>
                        <Text style={tailwind`text-xs text-gray-500`}>Lorem ipsum dolor sit amet amet, tritani luptatum similique ad nec.</Text>
                    </View>

                    <View style={tailwind`m-2 p-4 border-gray-50 border-2 drop-shadow rounded`}>
                        <Text style={tailwind`font-bold text-lg`}>Accredited Mechanic</Text>
                        <Text style={tailwind`text-xs text-gray-500`}>Lorem ipsum dolor sit amet amet, tritani luptatum similique ad nec.</Text>
                    </View>
                    <View style={tailwind`m-2 p-4 border-gray-50 border-2 drop-shadow rounded`}>
                        <Text style={tailwind`font-bold text-lg`}>Make Your Vehicle A Priority</Text>
                        <Text style={tailwind`text-xs text-gray-500`}>Lorem ipsum dolor sit amet amet, tritani luptatum similique ad nec.</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
};

export default AboutScreen;